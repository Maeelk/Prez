export interface HeroDefinition {
  id: string;
  nom: string;
  description: string;
  pvMax: number;
  vitesse: number;
  passif: Record<string, unknown>;
}

export interface WeaponDefinition {
  id: string;
  nom: string;
  type:
    | 'projectile_arc'
    | 'projectile_retour'
    | 'orbite_collecte'
    | 'dash'
    | 'fouet'
    | 'projectile_homing'
    | 'slash_arc'
    | 'projectile_ligne'
    | 'projectile_lent'
    | 'pluie_zone'
    | 'aura_proche'
    | 'buff_rythme';
  cooldownMs: number;
  degats: number;
  vitesseProj: number;
  pierce: number;
  quantite: number;
  niveauMax: number;
  ameliorations: Record<string, number>[];
  evolution?: {
    nom: string;
    passifRequis: string;
    bonus: Record<string, unknown>;
  };
}

export interface PassiveDefinition {
  id: string;
  nom: string;
  description: string;
  bonus: Record<string, number>;
}

export interface EnemyDefinition {
  id: string;
  nom?: string;
  pv: number;
  degats: number;
  vitesse: number;
  xp: number;
  pattern?: string;
}

export interface BossDefinition extends EnemyDefinition {
  minute: number;
}

export interface EnemyDatabase {
  trash: EnemyDefinition[];
  elites: EnemyDefinition[];
  boss: BossDefinition[];
}

export interface WaveDefinition {
  debut: number;
  fin: number;
  composition: Record<string, number>;
}

export interface HazardEvent {
  minute: number;
  type: string;
  duree: number;
}

export interface BiomeDefinition {
  id: string;
  nom: string;
  description: string;
  hazard: string;
  events: HazardEvent[];
  vagues: WaveDefinition[];
}

export interface WavesDatabase {
  biomes: BiomeDefinition[];
}

export interface GameData {
  heroes: HeroDefinition[];
  weapons: WeaponDefinition[];
  passives: PassiveDefinition[];
  enemies: EnemyDatabase;
  waves: WavesDatabase;
  xpCurve: number[];
}

export type WeaponInstance = {
  definition: WeaponDefinition;
  niveau: number;
  evolution?: boolean;
  charge?: number;
};

export type PassiveInstance = {
  definition: PassiveDefinition;
  niveau: number;
};

export interface PlayerStats {
  pv: number;
  pvMax: number;
  vitesse: number;
  bonusDegats: number;
  bonusCadence: number;
  bonusPortee: number;
  bonusZone: number;
  bonusAimant: number;
  bonusRegen: number;
  bonusVitesse: number;
  bonusControle: number;
  bonusElectricite: number;
  bonusXp: number;
}

export interface SaveData {
  meilleurScore: number;
  meilleurDetail?: {
    seed: number;
    heros: string;
    biome: string;
    score: number;
  };
}

export interface OptionData {
  volumeSfx: number;
  volumeBgm: number;
  daltonisme: 'standard' | 'protanopie' | 'deuteranopie' | 'tritanopie';
  taillePolice: number;
  fxIntensite: number;
  modePerformance: boolean;
}
