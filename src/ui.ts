import type {
  BiomeDefinition,
  HeroDefinition,
  OptionData
} from './types';

export type MenuSelection =
  | { type: 'demarrer'; hero: string; biome: string }
  | { type: 'continuer' }
  | { type: 'options'; options: OptionData }
  | { type: 'fermer'; reason?: string };

export interface LevelUpChoice {
  id: string;
  nom: string;
  description: string;
  type: 'weapon' | 'passive';
}

export class UIManager {
  private root: HTMLElement;
  private callbacks: { onMenu?: (selection: MenuSelection) => void } = {};
  private options: OptionData;
  private seedValeur = 0;
  private seedHero = '';
  private seedBiome = '';
  private highscore = 0;
  private highscoreDetail = '';

  constructor(layer: HTMLElement, initialOptions: OptionData, highscore: number, detail: string) {
    this.root = layer;
    this.options = initialOptions;
    this.highscore = highscore;
    this.highscoreDetail = detail;
    document.documentElement.dataset.daltonisme = initialOptions.daltonisme;
  }

  onMenu(callback: (selection: MenuSelection) => void): void {
    this.callbacks.onMenu = callback;
  }

  afficherTitre(heroes: HeroDefinition[], biomes: BiomeDefinition[]): void {
    this.root.innerHTML = '';
    const container = document.createElement('div');
    container.style.background = 'rgba(10, 14, 26, 0.92)';
    container.style.border = '2px solid #4a7bd1';
    container.style.padding = '32px';
    container.style.borderRadius = '16px';
    container.style.minWidth = '320px';
    container.style.maxWidth = '640px';
    container.style.textAlign = 'left';
    container.style.display = 'grid';
    container.style.gap = '24px';
    container.style.fontSize = `${this.options.taillePolice}px`;

    const title = document.createElement('h1');
    title.textContent = 'Goat Survivors';
    title.style.margin = '0';
    title.style.fontSize = `${this.options.taillePolice + 10}px`;
    container.appendChild(title);

    const best = document.createElement('div');
    best.innerHTML = `<strong>Meilleur score :</strong> ${this.highscore.toLocaleString('fr-FR')}<br/><small>${this.highscoreDetail}</small>`;
    container.appendChild(best);

    const heroLabel = document.createElement('label');
    heroLabel.textContent = 'Héros';
    const heroSelect = document.createElement('select');
    heroSelect.style.fontSize = `${this.options.taillePolice}px`;
    for (const hero of heroes) {
      const option = document.createElement('option');
      option.value = hero.id;
      option.textContent = `${hero.nom} — ${hero.description}`;
      heroSelect.appendChild(option);
    }
    heroLabel.appendChild(heroSelect);
    container.appendChild(heroLabel);

    const biomeLabel = document.createElement('label');
    biomeLabel.textContent = 'Biome';
    const biomeSelect = document.createElement('select');
    biomeSelect.style.fontSize = `${this.options.taillePolice}px`;
    for (const biome of biomes) {
      const option = document.createElement('option');
      option.value = biome.id;
      option.textContent = `${biome.nom} — ${biome.description}`;
      biomeSelect.appendChild(option);
    }
    biomeLabel.appendChild(biomeSelect);
    container.appendChild(biomeLabel);

    const seedDisplay = document.createElement('div');
    const mettreAJourSeed = () => {
      const hero = heroes.find((h) => h.id === heroSelect.value);
      const biome = biomes.find((b) => b.id === biomeSelect.value);
      if (hero && biome) {
        seedDisplay.textContent = this.formatSeed(hero.nom, biome.nom);
      }
    };
    mettreAJourSeed();
    container.appendChild(seedDisplay);

    const startButton = document.createElement('button');
    startButton.textContent = 'Lancer la run (7:00)';
    startButton.style.fontSize = `${this.options.taillePolice + 2}px`;
    startButton.addEventListener('click', () => {
      this.callbacks.onMenu?.({ type: 'demarrer', hero: heroSelect.value, biome: biomeSelect.value });
    });
    container.appendChild(startButton);
    heroSelect.addEventListener('change', mettreAJourSeed);
    biomeSelect.addEventListener('change', mettreAJourSeed);

    const optionsButton = document.createElement('button');
    optionsButton.textContent = 'Options & Accessibilité';
    optionsButton.style.fontSize = `${this.options.taillePolice}px`;
    optionsButton.addEventListener('click', () => this.afficherOptions());
    container.appendChild(optionsButton);

    this.root.appendChild(container);
    this.root.style.display = 'flex';
  }

  afficherOptions(): void {
    this.root.innerHTML = '';
    const panel = document.createElement('div');
    panel.style.background = 'rgba(14, 18, 30, 0.95)';
    panel.style.border = '2px solid #5f9ae6';
    panel.style.padding = '32px';
    panel.style.borderRadius = '16px';
    panel.style.display = 'grid';
    panel.style.gap = '16px';
    panel.style.fontSize = `${this.options.taillePolice}px`;

    const heading = document.createElement('h2');
    heading.textContent = 'Options';
    heading.style.margin = '0';
    panel.appendChild(heading);

    const sfx = this.slider('Volume SFX', this.options.volumeSfx, (value) => (this.options.volumeSfx = value));
    const bgm = this.slider('Volume Musique', this.options.volumeBgm, (value) => (this.options.volumeBgm = value));
    panel.appendChild(sfx);
    panel.appendChild(bgm);

    const size = this.slider('Taille police', this.options.taillePolice, (value) => (this.options.taillePolice = value), 14, 28);
    panel.appendChild(size);

    const fx = this.slider('Intensité effets', this.options.fxIntensite, (value) => (this.options.fxIntensite = value), 0, 1, 0.05);
    panel.appendChild(fx);

    const modePerfLabel = document.createElement('label');
    const modePerf = document.createElement('input');
    modePerf.type = 'checkbox';
    modePerf.checked = this.options.modePerformance;
    modePerf.addEventListener('change', () => {
      this.options.modePerformance = modePerf.checked;
    });
    modePerfLabel.appendChild(modePerf);
    modePerfLabel.append(' Mode performance (moins de particules)');
    panel.appendChild(modePerfLabel);

    const daltonisme = document.createElement('label');
    daltonisme.textContent = 'Daltonisme';
    const select = document.createElement('select');
    select.style.fontSize = `${this.options.taillePolice}px`;
    for (const mode of ['standard', 'protanopie', 'deuteranopie', 'tritanopie'] as const) {
      const option = document.createElement('option');
      option.value = mode;
      option.textContent = mode;
      if (mode === this.options.daltonisme) {
        option.selected = true;
      }
      select.appendChild(option);
    }
    select.addEventListener('change', () => {
      this.options.daltonisme = select.value as OptionData['daltonisme'];
      document.documentElement.dataset.daltonisme = this.options.daltonisme;
    });
    daltonisme.appendChild(select);
    panel.appendChild(daltonisme);

    const close = document.createElement('button');
    close.textContent = 'Retour';
    close.addEventListener('click', () => {
      this.callbacks.onMenu?.({ type: 'options', options: { ...this.options } });
    });
    panel.appendChild(close);

    this.root.appendChild(panel);
    this.root.style.display = 'flex';
  }

  afficherLevelUp(choices: LevelUpChoice[], onPick: (id: string) => void, onReroll: (() => void) | null, rerolls: number, banishDisponible: boolean, onBanish: ((id: string) => void) | null): void {
    this.root.innerHTML = '';
    const panel = document.createElement('div');
    panel.style.background = 'rgba(14, 18, 30, 0.95)';
    panel.style.border = '2px solid #9bd76c';
    panel.style.padding = '24px';
    panel.style.borderRadius = '16px';
    panel.style.display = 'grid';
    panel.style.gap = '12px';
    panel.style.fontSize = `${this.options.taillePolice}px`;

    const title = document.createElement('h2');
    title.textContent = 'Amélioration (choisir 1)';
    title.style.margin = '0';
    panel.appendChild(title);

    choices.forEach((choice) => {
      const button = document.createElement('button');
      button.style.padding = '12px';
      button.style.textAlign = 'left';
      button.innerHTML = `<strong>${choice.nom}</strong><br/><small>${choice.description}</small>`;
      button.addEventListener('click', () => onPick(choice.id));
      panel.appendChild(button);
      if (banishDisponible && onBanish) {
        const banish = document.createElement('button');
        banish.textContent = `Bannir ${choice.nom}`;
        banish.style.fontSize = `${this.options.taillePolice - 2}px`;
        banish.addEventListener('click', (event) => {
          event.stopPropagation();
          onBanish(choice.id);
        });
        panel.appendChild(banish);
      }
    });

    if (onReroll) {
      const reroll = document.createElement('button');
      reroll.textContent = `Relance (${rerolls})`;
      reroll.addEventListener('click', () => onReroll());
      panel.appendChild(reroll);
    }

    this.root.appendChild(panel);
    this.root.style.display = 'flex';
  }

  afficherResume(resultat: {
    victoire: boolean;
    score: number;
    temps: number;
    seed: number;
    heros: HeroDefinition;
    biome: BiomeDefinition;
    xp: number;
    kills: number;
  }, onRetour: () => void, onRelancer: () => void): void {
    this.root.innerHTML = '';
    const panel = document.createElement('div');
    panel.style.background = 'rgba(16, 20, 30, 0.95)';
    panel.style.border = resultat.victoire ? '2px solid #79d17c' : '2px solid #d17979';
    panel.style.padding = '32px';
    panel.style.borderRadius = '18px';
    panel.style.display = 'grid';
    panel.style.gap = '16px';
    panel.style.fontSize = `${this.options.taillePolice}px`;

    const title = document.createElement('h2');
    title.textContent = resultat.victoire ? 'Victoire caprine !' : 'Défaite héroïque';
    title.style.margin = '0';
    panel.appendChild(title);

    const infos = document.createElement('div');
    infos.innerHTML = `Score : <strong>${resultat.score.toLocaleString('fr-FR')}</strong><br/>Temps : ${(resultat.temps / 60).toFixed(2)} min<br/>XP : ${Math.round(resultat.xp)}<br/>Victimes : ${resultat.kills}<br/>Héros : ${resultat.heros.nom}<br/>Biome : ${resultat.biome.nom}<br/>Seed : ${resultat.seed}`;
    panel.appendChild(infos);

    const boutons = document.createElement('div');
    boutons.style.display = 'flex';
    boutons.style.gap = '12px';
    const retour = document.createElement('button');
    retour.textContent = 'Menu principal';
    retour.addEventListener('click', onRetour);
    const relancer = document.createElement('button');
    relancer.textContent = 'Rejouer';
    relancer.addEventListener('click', onRelancer);
    boutons.appendChild(retour);
    boutons.appendChild(relancer);
    panel.appendChild(boutons);

    this.root.appendChild(panel);
    this.root.style.display = 'flex';
  }

  masquer(): void {
    this.root.style.display = 'none';
    this.root.innerHTML = '';
  }

  setSeedInfo(seed: number, hero: HeroDefinition, biome: BiomeDefinition): void {
    this.seedValeur = seed;
    this.seedHero = hero.nom;
    this.seedBiome = biome.nom;
  }

  setHighscore(score: number, detail: string): void {
    this.highscore = score;
    this.highscoreDetail = detail;
  }

  afficherPause(onReprendre: () => void): void {
    this.root.innerHTML = '';
    const panel = document.createElement('div');
    panel.style.background = 'rgba(8, 10, 16, 0.8)';
    panel.style.border = '2px solid #8fa5d9';
    panel.style.padding = '24px';
    panel.style.borderRadius = '16px';
    panel.style.textAlign = 'center';
    panel.style.fontSize = `${this.options.taillePolice}px`;
    panel.innerHTML = '<h2>Pause</h2><p>Appuyez sur Échap pour reprendre</p>';
    const bouton = document.createElement('button');
    bouton.textContent = 'Reprendre';
    bouton.addEventListener('click', () => onReprendre());
    panel.appendChild(bouton);
    this.root.appendChild(panel);
    this.root.style.display = 'flex';
  }

  afficherNotification(texte: string): void {
    const toast = document.createElement('div');
    toast.textContent = texte;
    toast.style.position = 'absolute';
    toast.style.bottom = '10%';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.padding = '12px 24px';
    toast.style.background = 'rgba(18, 26, 42, 0.85)';
    toast.style.border = '1px solid #8fc1ff';
    toast.style.borderRadius = '12px';
    toast.style.pointerEvents = 'none';
    this.root.appendChild(toast);
    this.root.style.display = 'flex';
    setTimeout(() => {
      toast.remove();
      if (this.root.childElementCount === 0) {
        this.root.style.display = 'none';
      }
    }, 2000);
  }

  private slider(
    label: string,
    valeur: number,
    onChange: (value: number) => void,
    min = 0,
    max = 1,
    step = 0.1
  ): HTMLElement {
    const wrapper = document.createElement('label');
    wrapper.style.display = 'grid';
    wrapper.style.gap = '4px';
    const span = document.createElement('span');
    span.textContent = `${label} : ${valeur.toFixed(2)}`;
    const input = document.createElement('input');
    input.type = 'range';
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);
    input.value = String(valeur);
    input.addEventListener('input', () => {
      const nombre = Number(input.value);
      span.textContent = `${label} : ${nombre.toFixed(2)}`;
      onChange(nombre);
    });
    wrapper.appendChild(span);
    wrapper.appendChild(input);
    return wrapper;
  }

  private formatSeed(heroNom: string, biomeNom: string): string {
    const seedTexte = this.seedValeur ? this.seedValeur.toString() : '—';
    const hero = this.seedHero || heroNom;
    const biome = this.seedBiome || biomeNom;
    return `Seed active : ${seedTexte} — ${hero} dans ${biome}`;
  }
}
