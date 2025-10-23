export class SeededRandom {
  private state: number;

  constructor(seed: number) {
    this.state = seed >>> 0;
    if (this.state === 0) {
      this.state = 0x12345678;
    }
  }

  next(): number {
    // Xorshift32
    let x = this.state;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    this.state = x >>> 0;
    return this.state / 0xffffffff;
  }

  range(min: number, max: number): number {
    return min + (max - min) * this.next();
  }

  pick<T>(values: readonly T[]): T {
    return values[Math.floor(this.next() * values.length)]!;
  }

  shuffle<T>(values: T[]): T[] {
    for (let i = values.length - 1; i > 0; i -= 1) {
      const j = Math.floor(this.next() * (i + 1));
      [values[i], values[j]] = [values[j]!, values[i]!];
    }
    return values;
  }
}
