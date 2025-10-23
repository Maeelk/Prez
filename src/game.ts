import { World, type Entity } from './ecs';
import { InputManager } from './input';
import { SeededRandom } from './random';
import { AudioManager } from './audio';
import type {
  BiomeDefinition,
  GameData,
  HeroDefinition,
  OptionData,
  PassiveDefinition,
  PlayerStats,
  WeaponInstance,
  PassiveInstance,
  EnemyDefinition,
  BossDefinition
} from './types';
import { UIManager, type LevelUpChoice } from './ui';

interface PositionComponent {
  x: number;
  y: number;
}

interface VelocityComponent {
  x: number;
  y: number;
}

interface SpriteComponent {
  couleur: string;
  rayon: number;
  couche: number;
  alpha?: number;
}

interface PlayerComponent {
  hero: HeroDefinition;
  stats: PlayerStats;
  xp: number;
  niveau: number;
  xpTotal: number;
  xpPourNiveau: number;
  tempsInvulnerable: number;
  dashRecharge: number;
  dashRestant: number;
  armes: WeaponInstance[];
  passifs: PassiveInstance[];
  rerolls: number;
  banishDisponible: boolean;
  buffCadence: number;
  buffVitesse: number;
}

interface EnemyComponent {
  definition: EnemyDefinition | BossDefinition;
  pv: number;
  elite: boolean;
  boss: boolean;
}

interface ProjectileComponent {
  degats: number;
  vitesse: number;
  directionX: number;
  directionY: number;
  vieRestante: number;
  pierce: number;
  rayon: number;
  retour?: boolean;
  origineX?: number;
  origineY?: number;
  rotation?: number;
  type: string;
}

interface PickupComponent {
  type: 'xp' | 'coin' | 'soin';
  valeur: number;
}

interface ZoneDegatsComponent {
  rayon: number;
  degats: number;
  duree: number;
  intervalle: number;
  tempsRestant: number;
  derniereFrappe: number;
  attacheJoueur?: boolean;
}

export type GameState = 'menu' | 'chargement' | 'running' | 'paused' | 'levelup' | 'resume';

interface ScoreState {
  kills: number;
  xp: number;
  pieces: number;
  temps: number;
}

export class Game {
  private ctx: CanvasRenderingContext2D;
  private world = new World();
  private playerStore = this.world.registerComponent<PlayerComponent>('player');
  private positionStore = this.world.registerComponent<PositionComponent>('position');
  private velocityStore = this.world.registerComponent<VelocityComponent>('velocity');
  private spriteStore = this.world.registerComponent<SpriteComponent>('sprite');
  private enemyStore = this.world.registerComponent<EnemyComponent>('enemy');
  private projectileStore = this.world.registerComponent<ProjectileComponent>('projectile');
  private pickupStore = this.world.registerComponent<PickupComponent>('pickup');
  private zoneStore = this.world.registerComponent<ZoneDegatsComponent>('zone');

  private input: InputManager;
  private ui: UIManager;
  private rng = new SeededRandom(Date.now());
  private data: GameData;
  private heroSelection: HeroDefinition;
  private biomeSelection: BiomeDefinition;
  private state: GameState = 'menu';
  private tempsEcoule = 0;
  private seed = Math.floor(Math.random() * 1_000_000);
  private audio = new AudioManager();
  private options: OptionData;
  private runScore: ScoreState = { kills: 0, xp: 0, pieces: 0, temps: 0 };
  private highscore: number;
  private highscoreDetail: string;
  private inputPauseLatched = false;
  private joueurEntity: Entity | null = null;
  private armesBannies = new Set<string>();
  private passifsBannis = new Set<string>();

  constructor(
    canvas: HTMLCanvasElement,
    uiLayer: HTMLElement,
    data: GameData,
    options: OptionData,
    highscore: number,
    detail: string
  ) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Impossible d\'obtenir le contexte Canvas');
    }
    this.ctx = ctx;
    this.data = data;
    this.options = options;
    this.highscore = highscore;
    this.highscoreDetail = detail;
    this.heroSelection = data.heroes[0]!;
    this.biomeSelection = data.waves.biomes[0]!;
    this.ui = new UIManager(uiLayer, options, highscore, detail);
    this.input = new InputManager(canvas);
    this.ui.onMenu((selection) => {
      if (selection.type === 'demarrer') {
        const hero = this.data.heroes.find((h) => h.id === selection.hero);
        const biome = this.data.waves.biomes.find((b) => b.id === selection.biome);
        if (hero && biome) {
          this.heroSelection = hero;
          this.biomeSelection = biome;
          this.demarrerRun();
        }
      } else if (selection.type === 'options') {
        this.options = selection.options;
        this.audio.setVolumes({ sfx: this.options.volumeSfx, bgm: this.options.volumeBgm });
        this.afficherMenuPrincipal();
        this.sauvegarderOptions();
      }
    });
    this.afficherMenuPrincipal();
  }

  private sauvegarderOptions(): void {
    localStorage.setItem('goat_survivors_options_v1', JSON.stringify(this.options));
  }

  afficherMenuPrincipal(): void {
    this.state = 'menu';
    this.ui.setSeedInfo(this.seed, this.heroSelection, this.biomeSelection);
    this.ui.afficherTitre(this.data.heroes, this.data.waves.biomes);
  }

  private demarrerRun(): void {
    this.state = 'running';
    this.ui.masquer();
    this.audio.unlock().catch(() => undefined);
    this.audio.playPad();
    this.audio.setVolumes({ sfx: this.options.volumeSfx, bgm: this.options.volumeBgm });
    this.resetWorld();
    this.rng = new SeededRandom(this.seed);
    this.tempsEcoule = 0;
    this.runScore = { kills: 0, xp: 0, pieces: 0, temps: 0 };
    this.armesBannies.clear();
    this.passifsBannies.clear();

    const player = this.world.createEntity();
    this.joueurEntity = player;
    this.positionStore.set(player, { x: 0, y: 0 });
    this.velocityStore.set(player, { x: 0, y: 0 });
    const stats: PlayerStats = {
      pv: this.heroSelection.pvMax,
      pvMax: this.heroSelection.pvMax,
      vitesse: this.heroSelection.vitesse,
      bonusDegats: 0,
      bonusCadence: 0,
      bonusPortee: 0,
      bonusZone: 0,
      bonusAimant: 0,
      bonusRegen: 0,
      bonusVitesse: 0,
      bonusControle: 0,
      bonusElectricite: 0,
      bonusXp: 0
    };

    this.playerStore.set(player, {
      hero: this.heroSelection,
      stats,
      xp: 0,
      xpTotal: 0,
      xpPourNiveau: this.data.xpCurve[1] ?? 20,
      niveau: 1,
      tempsInvulnerable: 1.2,
      dashRecharge: 0,
      dashRestant: 0,
      armes: [
        {
          definition: this.data.weapons[0]!,
          niveau: 1,
          charge: 0
        }
      ],
      passifs: [],
      rerolls: 2,
      banishDisponible: true,
      buffCadence: 0,
      buffVitesse: 0
    });
    this.spriteStore.set(player, { couleur: '#88ffcc', rayon: 16, couche: 5 });

    this.appliquerPassifHero(player);
    this.spawnAuraPermanente(player);
  }

  private appliquerPassifHero(player: Entity): void {
    const joueur = this.playerStore.get(player);
    if (!joueur) {
      return;
    }
    const passif = joueur.hero.passif;
    if (!passif) {
      return;
    }
    if (passif.type === 'xp_bonus') {
      joueur.stats.bonusXp += Number(passif.valeur ?? 0);
    } else if (passif.type === 'gel_periodique') {
      this.creerZoneGel(player, passif.intervalle as number, passif.duree as number, passif.rayon as number);
    } else if (passif.type === 'melee_bonus') {
      joueur.stats.bonusDegats += Number(passif.degats ?? 0);
      joueur.stats.bonusPortee += Number(passif.portee ?? 0);
      joueur.stats.pvMax += 20;
      joueur.stats.pv = joueur.stats.pvMax;
    } else if (passif.type === 'chaine_pickup') {
      // géré lors des collectes
    }
  }

  private creerZoneGel(player: Entity, intervalle: number, duree: number, rayon: number): void {
    const zone = this.world.createEntity();
    this.positionStore.set(zone, { x: 0, y: 0 });
    this.zoneStore.set(zone, {
      rayon,
      degats: 0,
      duree,
      intervalle,
      tempsRestant: duree,
      derniereFrappe: 0,
      attacheJoueur: true
    });
    this.spriteStore.set(zone, { couleur: 'rgba(160,220,255,0.35)', rayon, couche: 1, alpha: this.fxAlpha(0.4) });
  }

  private spawnAuraPermanente(player: Entity): void {
    const joueur = this.playerStore.get(player);
    if (!joueur) {
      return;
    }
    for (const arme of joueur.armes) {
      if (arme.definition.type === 'aura_proche') {
        this.creerAura(player, arme);
      }
    }
  }

  private creerAura(player: Entity, arme: WeaponInstance): void {
    const aura = this.world.createEntity();
    const stats = this.playerStore.get(player)?.stats;
    const rayon = 64 * (1 + (stats?.bonusZone ?? 0));
    const joueurPos = this.positionStore.get(player);
    this.positionStore.set(aura, {
      x: joueurPos?.x ?? 0,
      y: joueurPos?.y ?? 0
    });
    this.zoneStore.set(aura, {
      rayon,
      degats: this.calculerDegats(arme),
      duree: Infinity,
      intervalle: 0.5,
      tempsRestant: Infinity,
      derniereFrappe: 0,
      attacheJoueur: true
    });
    this.spriteStore.set(aura, { couleur: 'rgba(255,220,120,0.35)', rayon, couche: 1, alpha: this.fxAlpha(0.35) });
  }

  private resetWorld(): void {
    for (let entity = 1; entity < 20000; entity += 1) {
      try {
        this.world.destroyEntity(entity);
      } catch {
        // ignore
      }
    }
  }

  update(dt: number): void {
    if (this.state !== 'running' && this.state !== 'levelup' && this.state !== 'paused') {
      return;
    }
    const joueurEntity = this.joueurEntity;
    const joueur = joueurEntity ? this.playerStore.get(joueurEntity) : undefined;
    if (!joueur || !joueurEntity) {
      return;
    }

    if (this.state === 'paused') {
      return;
    }

    this.tempsEcoule += dt;
    this.runScore.temps = this.tempsEcoule;

    this.appliquerRegen(joueur, dt);
    this.mettreAJourInput(joueurEntity, joueur, dt);
    this.mettreAJourArmes(joueurEntity, joueur, dt);
    this.mettreAJourProjectiles(dt);
    this.mettreAJourZones(joueurEntity, dt);
    this.mettreAJourEnnemis(joueurEntity, joueur, dt);
    this.mettreAJourPickups(joueurEntity, joueur, dt);
    this.spawnEnnemis(joueurEntity, dt);
    this.gererBosses(joueurEntity);
    this.checkNiveau(joueurEntity, joueur);

    if (joueur.stats.pv <= 0) {
      this.terminerRun(false);
    }
    if (this.tempsEcoule >= 420) {
      this.terminerRun(true);
    }
  }

  private appliquerRegen(joueur: PlayerComponent, dt: number): void {
    if (joueur.stats.bonusRegen > 0) {
      joueur.stats.pv = Math.min(
        joueur.stats.pvMax,
        joueur.stats.pv + joueur.stats.bonusRegen * dt
      );
    }
    if (joueur.buffCadence > 0) {
      joueur.buffCadence = Math.max(0, joueur.buffCadence - dt);
    }
    if (joueur.buffVitesse > 0) {
      joueur.buffVitesse = Math.max(0, joueur.buffVitesse - dt);
    }
  }

  private mettreAJourInput(entity: Entity, joueur: PlayerComponent, dt: number): void {
    this.input.frameEnd();
    const vitesseBonus = 1 + joueur.stats.bonusVitesse + (joueur.buffVitesse > 0 ? 0.1 : 0);
    const vitesse = joueur.stats.vitesse * vitesseBonus;
    const vel = this.velocityStore.get(entity);
    if (vel) {
      vel.x = this.input.state.axeX * vitesse;
      vel.y = this.input.state.axeY * vitesse;
      const pos = this.positionStore.get(entity);
      if (pos) {
        pos.x += vel.x * dt;
        pos.y += vel.y * dt;
      }
    }

    if (this.input.state.dash && joueur.dashRecharge <= 0) {
      joueur.dashRecharge = 6;
      joueur.dashRestant = 0.3;
      this.audio.playBeep(880, 0.15);
    }

    if (joueur.dashRecharge > 0) {
      joueur.dashRecharge -= dt;
    }
    if (joueur.dashRestant > 0) {
      joueur.dashRestant -= dt;
      const pos = this.positionStore.get(entity);
      const dashSpeed = 520;
      if (pos) {
        const angle = Math.atan2(this.input.state.axeY, this.input.state.axeX);
        pos.x += Math.cos(angle) * dashSpeed * dt;
        pos.y += Math.sin(angle) * dashSpeed * dt;
      }
      this.dommagerAutour(pos?.x ?? 0, pos?.y ?? 0, 60, this.calculerDegats({
        definition: this.data.weapons.find((w) => w.id === 'sonic_dash') ?? this.data.weapons[0]!,
        niveau: 1
      }));
    }

    if (this.input.state.pause && !this.inputPauseLatched) {
      this.state = 'paused';
      this.ui.afficherPause(() => {
        this.state = 'running';
        this.ui.masquer();
      });
      this.inputPauseLatched = true;
    } else if (!this.input.state.pause) {
      this.inputPauseLatched = false;
    }
  }

  private mettreAJourArmes(entity: Entity, joueur: PlayerComponent, dt: number): void {
    for (const arme of joueur.armes) {
      const cadenceBonus = 1 + joueur.stats.bonusCadence + (joueur.buffCadence > 0 ? 0.15 : 0);
      const cd = Math.max(0.15, (arme.definition.cooldownMs / 1000) * (1 - cadenceBonus));
      arme.charge = (arme.charge ?? 0) + dt;
      if (
        arme.definition.type === 'orbite_collecte' ||
        arme.definition.type === 'aura_proche' ||
        arme.definition.type === 'dash'
      ) {
        continue;
      }
      if (arme.charge >= cd) {
        arme.charge = 0;
        this.declencherArme(entity, joueur, arme);
      }
    }
  }

  private declencherArme(entity: Entity, joueur: PlayerComponent, arme: WeaponInstance): void {
    switch (arme.definition.type) {
      case 'projectile_arc':
        this.tirerProjectile(entity, joueur, arme, { dispersion: 0.3, gravite: 0.0 });
        break;
      case 'projectile_retour':
        this.tirerBoomerang(entity, joueur, arme);
        break;
      case 'projectile_homing':
        this.tirerMissile(entity, joueur, arme);
        break;
      case 'dash':
        // géré via l'entrée du joueur
        break;
      case 'projectile_ligne':
        this.tirerProjectile(entity, joueur, arme, { dispersion: 0.05, vitesse: 1.2 });
        break;
      case 'projectile_lent':
        this.tirerProjectile(entity, joueur, arme, { dispersion: 0.05, vitesse: 0.6, rayon: 28 });
        break;
      case 'slash_arc':
        this.creerZone(entity, arme, 100, 0.2);
        break;
      case 'fouet':
        this.creerZone(entity, arme, 120, 0.1);
        break;
      case 'pluie_zone':
        this.creerPluie(entity, arme);
        break;
      case 'buff_rythme':
        this.activerBuff(joueur, arme);
        break;
      default:
        this.tirerProjectile(entity, joueur, arme, { dispersion: 0.2 });
        break;
    }
  }

  private tirerProjectile(entity: Entity, joueur: PlayerComponent, arme: WeaponInstance, opts: { dispersion?: number; vitesse?: number; rayon?: number }): void {
    const pos = this.positionStore.get(entity);
    if (!pos) {
      return;
    }
    const dispersion = opts.dispersion ?? 0.2;
    for (let i = 0; i < arme.definition.quantite + arme.niveau - 1; i += 1) {
      const angle = Math.atan2(this.input.state.axeY, this.input.state.axeX) || this.rng.range(-Math.PI, Math.PI);
      const offset = angle + this.rng.range(-dispersion, dispersion);
      const proj = this.world.createEntity();
      this.positionStore.set(proj, { x: pos.x, y: pos.y });
      const vitesse = (arme.definition.vitesseProj || 280) * (opts.vitesse ?? 1);
      this.projectileStore.set(proj, {
        degats: this.calculerDegats(arme),
        vitesse,
        directionX: Math.cos(offset),
        directionY: Math.sin(offset),
        vieRestante: 2.8,
        pierce: arme.definition.pierce,
        rayon: opts.rayon ?? 12,
        type: arme.definition.id
      });
      this.spriteStore.set(proj, { couleur: '#ffb347', rayon: opts.rayon ?? 12, couche: 3 });
    }
  }

  private tirerBoomerang(entity: Entity, joueur: PlayerComponent, arme: WeaponInstance): void {
    const pos = this.positionStore.get(entity);
    if (!pos) {
      return;
    }
    const proj = this.world.createEntity();
    const angle = this.rng.range(-Math.PI, Math.PI);
    this.positionStore.set(proj, { x: pos.x, y: pos.y });
    this.projectileStore.set(proj, {
      degats: this.calculerDegats(arme),
      vitesse: arme.definition.vitesseProj,
      directionX: Math.cos(angle),
      directionY: Math.sin(angle),
      vieRestante: 3.5,
      pierce: arme.definition.pierce,
      rayon: 14,
      retour: true,
      origineX: pos.x,
      origineY: pos.y,
      type: arme.definition.id
    });
    this.spriteStore.set(proj, { couleur: '#d1f0ff', rayon: 14, couche: 3 });
  }

  private tirerMissile(entity: Entity, joueur: PlayerComponent, arme: WeaponInstance): void {
    const pos = this.positionStore.get(entity);
    if (!pos) {
      return;
    }
    const cible = this.trouverEnnemiProche(pos.x, pos.y);
    const angle = cible
      ? Math.atan2((this.positionStore.get(cible)?.y ?? 0) - pos.y, (this.positionStore.get(cible)?.x ?? 0) - pos.x)
      : this.rng.range(-Math.PI, Math.PI);
    const proj = this.world.createEntity();
    this.positionStore.set(proj, { x: pos.x, y: pos.y });
    this.projectileStore.set(proj, {
      degats: this.calculerDegats(arme),
      vitesse: arme.definition.vitesseProj,
      directionX: Math.cos(angle),
      directionY: Math.sin(angle),
      vieRestante: 4,
      pierce: arme.definition.pierce,
      rayon: 12,
      type: arme.definition.id
    });
    this.spriteStore.set(proj, { couleur: '#9ef7ff', rayon: 12, couche: 3 });
  }

  private creerZone(entity: Entity, arme: WeaponInstance, rayon: number, duree: number): void {
    const pos = this.positionStore.get(entity);
    if (!pos) {
      return;
    }
    const zone = this.world.createEntity();
    this.positionStore.set(zone, { x: pos.x + 60, y: pos.y });
    this.zoneStore.set(zone, {
      rayon: rayon * (1 + this.playerStore.get(entity)!.stats.bonusZone),
      degats: this.calculerDegats(arme),
      duree,
      intervalle: 0.2,
      tempsRestant: duree,
      derniereFrappe: 0
    });
    this.spriteStore.set(zone, { couleur: 'rgba(255,130,120,0.5)', rayon, couche: 2, alpha: this.fxAlpha(0.45) });
  }

  private creerPluie(entity: Entity, arme: WeaponInstance): void {
    const pos = this.positionStore.get(entity);
    if (!pos) {
      return;
    }
    for (let i = 0; i < arme.definition.quantite; i += 1) {
      const zone = this.world.createEntity();
      this.positionStore.set(zone, {
        x: pos.x + this.rng.range(-240, 240),
        y: pos.y + this.rng.range(-180, 180)
      });
      this.zoneStore.set(zone, {
        rayon: 70,
        degats: this.calculerDegats(arme),
        duree: 1.6,
        intervalle: 0.3,
        tempsRestant: 1.6,
        derniereFrappe: 0
      });
      this.spriteStore.set(zone, { couleur: 'rgba(120,200,255,0.5)', rayon: 70, couche: 2, alpha: this.fxAlpha(0.4) });
    }
  }

  private activerBuff(joueur: PlayerComponent, arme: WeaponInstance): void {
    joueur.buffCadence = 4 + arme.niveau * 0.5;
    joueur.buffVitesse = 4 + arme.niveau * 0.5;
    this.audio.playBeep(660, 0.3);
  }

  private getJoueur(): PlayerComponent | null {
    if (!this.joueurEntity) {
      return null;
    }
    const joueur = this.playerStore.get(this.joueurEntity);
    return joueur ?? null;
  }

  private fxAlpha(mult: number): number {
    const facteur = 0.2 + 0.8 * this.options.fxIntensite;
    return Math.min(1, mult * facteur);
  }

  private calculerDegats(arme: WeaponInstance): number {
    const base = arme.definition.degats + (arme.niveau - 1) * 4;
    const bonus = this.getJoueur()?.stats.bonusDegats ?? 0;
    return base * (1 + bonus);
  }

  private mettreAJourProjectiles(dt: number): void {
    const aSupprimer: Entity[] = [];
    for (const [entity, projectile] of this.projectileStore.entries()) {
      const pos = this.positionStore.get(entity);
      if (!pos) {
        continue;
      }
      pos.x += projectile.directionX * projectile.vitesse * dt;
      pos.y += projectile.directionY * projectile.vitesse * dt;
      projectile.vieRestante -= dt;
      if (projectile.retour) {
        if (projectile.vieRestante <= 1.6) {
          const joueur = this.joueurEntity;
          if (joueur) {
            const pPos = this.positionStore.get(joueur);
            if (pPos) {
              const dirX = pPos.x - pos.x;
              const dirY = pPos.y - pos.y;
              const dist = Math.hypot(dirX, dirY) || 1;
              projectile.directionX = dirX / dist;
              projectile.directionY = dirY / dist;
            }
          }
        }
      }
      this.checkProjectileCollisions(entity, projectile, aSupprimer);
      if (projectile.vieRestante <= 0) {
        aSupprimer.push(entity);
      }
    }
    for (const entity of aSupprimer) {
      this.world.destroyEntity(entity);
    }
  }

  private checkProjectileCollisions(entity: Entity, projectile: ProjectileComponent, aSupprimer: Entity[]): void {
    for (const [enemyEntity, enemy] of this.enemyStore.entries()) {
      const posProj = this.positionStore.get(entity);
      const posEnemy = this.positionStore.get(enemyEntity);
      if (!posProj || !posEnemy) {
        continue;
      }
      const dist = Math.hypot(posProj.x - posEnemy.x, posProj.y - posEnemy.y);
      if (dist < projectile.rayon + (this.spriteStore.get(enemyEntity)?.rayon ?? 16)) {
        enemy.pv -= projectile.degats;
        if (enemy.pv <= 0) {
          this.tuerEnnemi(enemyEntity, enemy);
          this.runScore.kills += 1;
        }
        projectile.pierce -= 1;
        if (projectile.pierce <= 0) {
          aSupprimer.push(entity);
          break;
        }
      }
    }
  }

  private tuerEnnemi(enemyEntity: Entity, enemy: EnemyComponent): void {
    const pos = this.positionStore.get(enemyEntity);
    if (pos) {
      this.creerPickup(pos.x, pos.y, 'xp', enemy.definition.xp);
    }
    this.world.destroyEntity(enemyEntity);
    this.audio.playBeep(240, 0.05);
  }

  private creerPickup(x: number, y: number, type: 'xp' | 'coin' | 'soin', valeur: number): void {
    const pick = this.world.createEntity();
    this.positionStore.set(pick, { x, y });
    this.pickupStore.set(pick, { type, valeur });
    this.spriteStore.set(pick, {
      couleur: type === 'xp' ? '#66ffcc' : type === 'coin' ? '#e0c366' : '#f08080',
      rayon: type === 'xp' ? 8 : 10,
      couche: 1
    });
  }

  private mettreAJourZones(joueurEntity: Entity, dt: number): void {
    const joueurPos = this.positionStore.get(joueurEntity);
    for (const [entity, zone] of this.zoneStore.entries()) {
      if (zone.attacheJoueur && joueurPos) {
        this.positionStore.set(entity, { x: joueurPos.x, y: joueurPos.y });
      }
      zone.tempsRestant -= dt;
      zone.derniereFrappe += dt;
      if (zone.derniereFrappe >= zone.intervalle) {
        zone.derniereFrappe = 0;
        const pos = this.positionStore.get(entity);
        if (pos) {
          this.dommagerAutour(pos.x, pos.y, zone.rayon, zone.degats);
        }
      }
      if (zone.tempsRestant <= 0) {
        this.world.destroyEntity(entity);
      }
    }
  }

  private dommagerAutour(x: number, y: number, rayon: number, degats: number): void {
    for (const [enemyEntity, enemy] of this.enemyStore.entries()) {
      const pos = this.positionStore.get(enemyEntity);
      if (!pos) {
        continue;
      }
      if (Math.hypot(pos.x - x, pos.y - y) <= rayon) {
        enemy.pv -= degats;
        if (enemy.pv <= 0) {
          this.tuerEnnemi(enemyEntity, enemy);
          this.runScore.kills += 1;
        }
      }
    }
  }

  private mettreAJourEnnemis(joueurEntity: Entity, joueur: PlayerComponent, dt: number): void {
    const joueurPos = this.positionStore.get(joueurEntity);
    if (!joueurPos) {
      return;
    }
    for (const [enemyEntity, enemy] of this.enemyStore.entries()) {
      const pos = this.positionStore.get(enemyEntity);
      if (!pos) {
        continue;
      }
      const dirX = joueurPos.x - pos.x;
      const dirY = joueurPos.y - pos.y;
      const distance = Math.hypot(dirX, dirY) || 1;
      const vitesse = (enemy.definition.vitesse ?? 80) * dt;
      pos.x += (dirX / distance) * vitesse;
      pos.y += (dirY / distance) * vitesse;
      if (distance < (this.spriteStore.get(enemyEntity)?.rayon ?? 14) + 16) {
        if (joueur.tempsInvulnerable <= 0) {
          joueur.stats.pv -= enemy.definition.degats ?? 10;
          joueur.tempsInvulnerable = 1.2;
          this.audio.playBeep(160, 0.2);
        }
      }
    }
    if (joueur.tempsInvulnerable > 0) {
      joueur.tempsInvulnerable -= dt;
    }
  }

  private mettreAJourPickups(joueurEntity: Entity, joueur: PlayerComponent, dt: number): void {
    const joueurPos = this.positionStore.get(joueurEntity);
    if (!joueurPos) {
      return;
    }
    const aimant = 120 + joueur.stats.bonusAimant * 120;
    for (const [entity, pickup] of this.pickupStore.entries()) {
      const pos = this.positionStore.get(entity);
      if (!pos) {
        continue;
      }
      const dist = Math.hypot(pos.x - joueurPos.x, pos.y - joueurPos.y);
      if (dist < aimant) {
        const dirX = (joueurPos.x - pos.x) / (dist || 1);
        const dirY = (joueurPos.y - pos.y) / (dist || 1);
        pos.x += dirX * dt * 240;
        pos.y += dirY * dt * 240;
      }
      if (dist < 24) {
        this.collecterPickup(joueur, pickup);
        this.world.destroyEntity(entity);
      }
    }
  }

  private collecterPickup(joueur: PlayerComponent, pickup: PickupComponent): void {
    if (pickup.type === 'xp') {
      const bonus = 1 + joueur.stats.bonusXp;
      const gain = pickup.valeur * bonus;
      joueur.xp += gain;
      joueur.xpTotal += gain;
      this.runScore.xp += gain;
    } else if (pickup.type === 'coin') {
      this.runScore.pieces += pickup.valeur;
    } else if (pickup.type === 'soin') {
      joueur.stats.pv = Math.min(joueur.stats.pvMax, joueur.stats.pv + pickup.valeur);
    }
    this.audio.playBeep(520, 0.05);
  }

  private spawnEnnemis(joueurEntity: Entity, dt: number): void {
    const densiteMax = this.options.modePerformance ? 180 : 320;
    if ([...this.enemyStore.entries()].length >= densiteMax) {
      return;
    }
    const vague = this.biomeSelection.vagues.find((v) => this.tempsEcoule / 60 >= v.debut && this.tempsEcoule / 60 < v.fin);
    if (!vague) {
      return;
    }
    for (const [id, poids] of Object.entries(vague.composition)) {
      if (this.rng.next() < poids * dt * 0.05) {
        const def = this.data.enemies.trash.find((e) => e.id === id);
        if (def) {
          this.creerEnnemi(def, joueurEntity);
        }
      }
    }
    if (this.rng.next() < dt * 0.02) {
      const elite = this.data.enemies.elites[Math.floor(this.rng.next() * this.data.enemies.elites.length)];
      if (elite) {
        this.creerEnnemi(elite, joueurEntity, true);
      }
    }
  }

  private creerEnnemi(def: EnemyDefinition | BossDefinition, joueurEntity: Entity, elite = false): void {
    const joueurPos = this.positionStore.get(joueurEntity);
    if (!joueurPos) {
      return;
    }
    const ennemi = this.world.createEntity();
    const distance = 320 + this.rng.range(0, 220);
    const angle = this.rng.range(-Math.PI, Math.PI);
    this.positionStore.set(ennemi, {
      x: joueurPos.x + Math.cos(angle) * distance,
      y: joueurPos.y + Math.sin(angle) * distance
    });
    this.enemyStore.set(ennemi, {
      definition: def,
      pv: def.pv * (elite ? 1.6 : 1),
      elite,
      boss: 'minute' in def
    });
    const couleur = 'minute' in def ? '#ff6b6b' : elite ? '#f7b32b' : '#7bdff2';
    this.spriteStore.set(ennemi, {
      couleur,
      rayon: 'minute' in def ? 28 : elite ? 20 : 14,
      couche: 4
    });
  }

  private gererBosses(joueurEntity: Entity): void {
    for (const boss of this.data.enemies.boss) {
      if (
        this.tempsEcoule >= boss.minute * 60 &&
        ![...this.enemyStore.entries()].some(([, e]) => e.boss && e.definition.id === boss.id)
      ) {
        this.creerEnnemi(boss, joueurEntity, false);
        this.ui.afficherNotification(`Boss : ${boss.nom ?? boss.id}`);
      }
    }
  }

  private checkNiveau(entity: Entity, joueur: PlayerComponent): void {
    if (joueur.xp >= joueur.xpPourNiveau) {
      joueur.niveau += 1;
      joueur.xp -= joueur.xpPourNiveau;
      joueur.xpPourNiveau = this.data.xpCurve[Math.min(joueur.niveau, this.data.xpCurve.length - 1)] ?? (joueur.xpPourNiveau * 1.1);
      this.state = 'levelup';
      this.proposerLevelUp(entity, joueur);
    }
  }

  private proposerLevelUp(entity: Entity, joueur: PlayerComponent): void {
    const options: LevelUpChoice[] = [];
    const armesDisponibles = this.data.weapons.filter(
      (arme) => !joueur.armes.some((a) => a.definition.id === arme.id) && !this.armesBannies.has(arme.id)
    );
    const passifsDisponibles = this.data.passives.filter(
      (passif) => !joueur.passifs.some((p) => p.definition.id === passif.id) && !this.passifsBannis.has(passif.id)
    );
    const armesChoisies = this.rng.shuffle([...armesDisponibles]).slice(0, 2);
    const passifsChoisis = this.rng.shuffle([...passifsDisponibles]).slice(0, 1);
    for (const arme of armesChoisies) {
      options.push({ id: `arme:${arme.id}`, nom: arme.nom, description: `Ajoute ${arme.nom}.`, type: 'weapon' });
    }
    for (const passif of passifsChoisis) {
      options.push({ id: `passif:${passif.id}`, nom: passif.nom, description: passif.description, type: 'passive' });
    }
    const currentWeapons = joueur.armes.filter((arme) => arme.niveau < arme.definition.niveauMax).slice(0, 2);
    for (const arme of currentWeapons) {
      options.push({ id: `upgrade:${arme.definition.id}`, nom: `${arme.definition.nom} +1`, description: 'Améliore l\'arme.', type: 'weapon' });
    }
    const choices = options.slice(0, 3);
    this.ui.afficherLevelUp(
      choices,
      (id) => {
        this.appliquerChoix(entity, joueur, id);
        this.ui.masquer();
        this.state = 'running';
      },
      joueur.rerolls > 0
        ? () => {
            joueur.rerolls -= 1;
            this.ui.masquer();
            this.proposerLevelUp(entity, joueur);
          }
        : null,
      joueur.rerolls,
      joueur.banishDisponible,
      joueur.banishDisponible
        ? (id) => {
            joueur.banishDisponible = false;
            if (id.startsWith('arme:')) {
              const removeId = id.split(':')[1];
              this.armesBannies.add(removeId);
            } else if (id.startsWith('passif:')) {
              const removeId = id.split(':')[1];
              this.passifsBannies.add(removeId);
            }
            this.ui.masquer();
            this.proposerLevelUp(entity, joueur);
          }
        : null
    );
    this.audio.playBeep(980, 0.2);
  }

  private appliquerChoix(entity: Entity, joueur: PlayerComponent, id: string): void {
    if (id.startsWith('arme:')) {
      const armeId = id.split(':')[1];
      const def = this.data.weapons.find((arme) => arme.id === armeId);
      if (def) {
        joueur.armes.push({ definition: def, niveau: 1, charge: 0 });
        if (def.type === 'aura_proche' || def.type === 'orbite_collecte') {
          this.creerAura(entity, { definition: def, niveau: 1 });
        }
      }
    } else if (id.startsWith('passif:')) {
      const passifId = id.split(':')[1];
      const def = this.data.passives.find((p) => p.id === passifId);
      if (def) {
        joueur.passifs.push({ definition: def, niveau: 1 });
        this.appliquerPassif(joueur, def);
      }
    } else if (id.startsWith('upgrade:')) {
      const armeId = id.split(':')[1];
      const arme = joueur.armes.find((a) => a.definition.id === armeId);
      if (arme) {
        arme.niveau += 1;
      }
    }
  }

  private appliquerPassif(joueur: PlayerComponent, passif: PassiveDefinition): void {
    for (const [cle, valeur] of Object.entries(passif.bonus)) {
      if (cle === 'degats') {
        joueur.stats.bonusDegats += valeur;
      } else if (cle === 'cadence') {
        joueur.stats.bonusCadence += valeur;
      } else if (cle === 'portee') {
        joueur.stats.bonusPortee += valeur;
      } else if (cle === 'aimant') {
        joueur.stats.bonusAimant += valeur;
      } else if (cle === 'zone') {
        joueur.stats.bonusZone += valeur;
      } else if (cle === 'regen') {
        joueur.stats.bonusRegen += valeur;
      } else if (cle === 'vitesse') {
        joueur.stats.bonusVitesse += valeur;
      } else if (cle === 'controle') {
        joueur.stats.bonusControle += valeur;
      } else if (cle === 'electricite') {
        joueur.stats.bonusElectricite += valeur;
      }
    }
  }

  private terminerRun(victoire: boolean): void {
    this.state = 'menu';
    const score = Math.floor(this.runScore.xp * 5 + this.runScore.kills * 10 + this.runScore.pieces * 20 + this.runScore.temps * 2);
    if (score > this.highscore) {
      this.highscore = score;
      this.highscoreDetail = `${this.heroSelection.nom} — ${this.biomeSelection.nom} — seed ${this.seed}`;
      localStorage.setItem(
        'goat_survivors_highscore_v1',
        JSON.stringify({ score: this.highscore, detail: this.highscoreDetail })
      );
    }
    this.joueurEntity = null;
    this.ui.setHighscore(this.highscore, this.highscoreDetail);
    this.ui.afficherResume(
      {
        victoire,
        score,
        temps: this.runScore.temps,
        seed: this.seed,
        heros: this.heroSelection,
        biome: this.biomeSelection,
        xp: this.runScore.xp,
        kills: this.runScore.kills
      },
      () => {
        this.afficherMenuPrincipal();
      },
      () => {
        this.seed = Math.floor(Math.random() * 1_000_000);
        this.demarrerRun();
      }
    );
  }

  private trouverEnnemiProche(x: number, y: number): Entity | null {
    let meilleur: Entity | null = null;
    let distance = Infinity;
    for (const [entity] of this.enemyStore.entries()) {
      const pos = this.positionStore.get(entity);
      if (!pos) {
        continue;
      }
      const dist = Math.hypot(pos.x - x, pos.y - y);
      if (dist < distance) {
        distance = dist;
        meilleur = entity;
      }
    }
    return meilleur;
  }

  render(): void {
    this.ctx.save();
    this.ctx.fillStyle = '#080b11';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    const joueurEntity = this.joueurEntity;
    const centreX = this.ctx.canvas.width / 2;
    const centreY = this.ctx.canvas.height / 2;
    const joueurPos = joueurEntity ? this.positionStore.get(joueurEntity) : { x: 0, y: 0 };

    for (const [entity, sprite] of this.spriteStore.entries()) {
      const pos = this.positionStore.get(entity);
      if (!pos) {
        continue;
      }
      const x = centreX + pos.x - (joueurPos?.x ?? 0);
      const y = centreY + pos.y - (joueurPos?.y ?? 0);
      this.ctx.beginPath();
      this.ctx.fillStyle = sprite.couleur;
      if (sprite.alpha !== undefined) {
        this.ctx.globalAlpha = sprite.alpha;
      }
      this.ctx.arc(x, y, sprite.rayon, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    }

    if (joueurEntity) {
      const joueur = this.playerStore.get(joueurEntity);
      if (joueur) {
        this.afficherHUD(joueur);
      }
    }

    this.ctx.restore();
  }

  private afficherHUD(joueur: PlayerComponent): void {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(20, 20, 320, 110);

    ctx.fillStyle = '#ffffff';
    ctx.font = '16px "Inter", sans-serif';
    ctx.fillText(`PV : ${joueur.stats.pv.toFixed(0)} / ${joueur.stats.pvMax}`, 32, 48);
    ctx.fillText(`Niveau : ${joueur.niveau}`, 32, 70);
    ctx.fillText(`Temps : ${(this.runScore.temps).toFixed(1)} s`, 32, 92);
    ctx.fillText(`Score : ${Math.floor(this.runScore.xp * 5 + this.runScore.kills * 10).toLocaleString('fr-FR')}`, 32, 114);

    ctx.fillStyle = '#9fdf99';
    const ratioXp = Math.min(1, joueur.xp / joueur.xpPourNiveau);
    ctx.fillRect(32, 126, 256 * ratioXp, 12);
    ctx.strokeStyle = '#ffffff';
    ctx.strokeRect(32, 126, 256, 12);
    ctx.restore();
  }
}
