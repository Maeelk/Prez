import { loadGameData } from './dataLoader';
import { Game } from './game';
import type { OptionData } from './types';

const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
const uiLayer = document.getElementById('ui-layer') as HTMLDivElement;

const options: OptionData = chargerOptions();
let highscore = 0;
let detail = '';
try {
  const brut = localStorage.getItem('goat_survivors_highscore_v1');
  if (brut) {
    const data = JSON.parse(brut) as { score: number; detail: string };
    highscore = data.score;
    detail = data.detail;
  }
} catch (error) {
  console.warn('High score illisible', error);
}

loadGameData()
  .then((data) => {
    const game = new Game(canvas, uiLayer, data, options, highscore, detail);
    let derniere = performance.now();

    const boucle = (heure: number) => {
      const dt = Math.min(0.1, (heure - derniere) / 1000);
      derniere = heure;
      game.update(dt);
      game.render();
      requestAnimationFrame(boucle);
    };
    requestAnimationFrame(boucle);
  })
  .catch((error) => {
    uiLayer.innerHTML = `<div style="padding:24px;background:#2d0a0a;border:2px solid #ff6666;border-radius:12px;">Erreur de chargement : ${String(error)}</div>`;
  });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .catch((error) => console.warn('Service worker non disponible', error));
  });
}

function chargerOptions(): OptionData {
  const defaut: OptionData = {
    volumeSfx: 0.4,
    volumeBgm: 0.3,
    daltonisme: 'standard',
    taillePolice: 18,
    fxIntensite: 1,
    modePerformance: false
  };
  try {
    const brut = localStorage.getItem('goat_survivors_options_v1');
    if (brut) {
      return { ...defaut, ...(JSON.parse(brut) as Partial<OptionData>) } as OptionData;
    }
  } catch (error) {
    console.warn('Options illisibles', error);
  }
  return defaut;
}
