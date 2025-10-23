export class AudioManager {
  private ctx: AudioContext | null = null;
  private unlocked = false;
  private masterGain: GainNode | null = null;
  private bgmGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;

  private ensureContext(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.bgmGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();
      this.masterGain.connect(this.ctx.destination);
      this.bgmGain.connect(this.masterGain);
      this.sfxGain.connect(this.masterGain);
      const compressor = this.ctx.createDynamicsCompressor();
      compressor.threshold.value = -24;
      compressor.knee.value = 30;
      compressor.ratio.value = 12;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.25;
      this.masterGain.disconnect();
      this.masterGain.connect(compressor);
      compressor.connect(this.ctx.destination);
    }
    return this.ctx;
  }

  async unlock(): Promise<void> {
    if (this.unlocked) {
      return;
    }
    const ctx = this.ensureContext();
    await ctx.resume();
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = 440;
    const gain = ctx.createGain();
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
    this.unlocked = true;
  }

  setVolumes({ sfx, bgm }: { sfx: number; bgm: number }): void {
    this.ensureContext();
    if (this.sfxGain) {
      this.sfxGain.gain.value = sfx;
    }
    if (this.bgmGain) {
      this.bgmGain.gain.value = bgm;
    }
  }

  playBeep(frequency: number, duration = 0.2): void {
    if (!this.unlocked) {
      return;
    }
    const ctx = this.ensureContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = frequency;
    osc.type = 'sine';
    gain.gain.value = 0.3;
    osc.connect(gain);
    gain.connect(this.sfxGain ?? ctx.destination);
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.01);
    gain.gain.linearRampToValueAtTime(0.0, now + duration);
    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  playPad(): void {
    if (!this.unlocked) {
      return;
    }
    const ctx = this.ensureContext();
    const gain = ctx.createGain();
    gain.gain.value = 0.15;
    const noise = this.createNoiseBuffer(ctx);
    const source = ctx.createBufferSource();
    source.buffer = noise;
    source.loop = true;
    source.connect(gain);
    gain.connect(this.bgmGain ?? ctx.destination);
    source.start();
  }

  private createNoiseBuffer(ctx: AudioContext): AudioBuffer {
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * 0.3;
    }
    return buffer;
  }
}
