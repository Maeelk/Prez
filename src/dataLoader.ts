import type { GameData } from './types';

async function loadJson<T>(path: string): Promise<T> {
  const url = new URL(`../data/${path}`, import.meta.url);
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Impossible de charger ${path}`);
  }
  return (await response.json()) as T;
}

export async function loadGameData(): Promise<GameData> {
  const [heroes, weapons, passives, enemies, waves, xpCurve] = await Promise.all([
    loadJson('heroes.json'),
    loadJson('weapons.json'),
    loadJson('passives.json'),
    loadJson('ennemis.json'),
    loadJson('waves.json'),
    loadJson('xp_curve.json')
  ]);
  return {
    heroes,
    weapons,
    passives,
    enemies,
    waves,
    xpCurve
  };
}
