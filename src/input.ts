export interface InputState {
  axeX: number;
  axeY: number;
  dash: boolean;
  pause: boolean;
}

export class InputManager {
  state: InputState = { axeX: 0, axeY: 0, dash: false, pause: false };
  private keys = new Set<string>();
  private dashPressed = false;
  private pausePressed = false;

  constructor(private canvas: HTMLCanvasElement) {
    window.addEventListener('keydown', (event) => this.onKeyDown(event));
    window.addEventListener('keyup', (event) => this.onKeyUp(event));
    this.setupTouch();
  }

  frameEnd(): void {
    this.state.dash = this.dashPressed;
    this.dashPressed = false;
    this.state.pause = this.pausePressed;
    this.pausePressed = false;
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'z', 'q', 's', 'd'].includes(event.key)) {
      event.preventDefault();
    }
    this.keys.add(event.key.toLowerCase());
    if (event.key === ' ') {
      this.dashPressed = true;
    }
    if (event.key === 'Escape') {
      this.pausePressed = true;
    }
    this.updateAxis();
  }

  private onKeyUp(event: KeyboardEvent): void {
    this.keys.delete(event.key.toLowerCase());
    this.updateAxis();
  }

  private updateAxis(): void {
    const up = this.keys.has('arrowup') || this.keys.has('z');
    const down = this.keys.has('arrowdown') || this.keys.has('s');
    const left = this.keys.has('arrowleft') || this.keys.has('q');
    const right = this.keys.has('arrowright') || this.keys.has('d');
    this.state.axeX = Number(right) - Number(left);
    this.state.axeY = Number(down) - Number(up);
    const length = Math.hypot(this.state.axeX, this.state.axeY);
    if (length > 0) {
      this.state.axeX /= length;
      this.state.axeY /= length;
    }
  }

  private setupTouch(): void {
    let active = false;
    let originX = 0;
    let originY = 0;

    const zone = document.createElement('div');
    zone.style.position = 'absolute';
    zone.style.left = '0';
    zone.style.bottom = '0';
    zone.style.width = '50%';
    zone.style.height = '100%';
    zone.style.touchAction = 'none';
    zone.style.pointerEvents = 'auto';
    zone.style.opacity = '0';
    this.canvas.parentElement?.appendChild(zone);

    const dashButton = document.createElement('button');
    dashButton.textContent = 'Ruée';
    dashButton.style.position = 'absolute';
    dashButton.style.right = '2%';
    dashButton.style.bottom = '10%';
    dashButton.style.width = '96px';
    dashButton.style.height = '96px';
    dashButton.style.borderRadius = '50%';
    dashButton.style.background = '#1e2c5dAA';
    dashButton.style.color = '#fff';
    dashButton.style.fontSize = '20px';
    dashButton.style.border = '2px solid #5fa1ff';
    dashButton.style.pointerEvents = 'auto';
    dashButton.style.touchAction = 'manipulation';
    dashButton.addEventListener('touchstart', (event) => {
      event.preventDefault();
      this.dashPressed = true;
    });
    this.canvas.parentElement?.appendChild(dashButton);

    zone.addEventListener('touchstart', (event) => {
      active = true;
      const touch = event.touches[0];
      originX = touch.clientX;
      originY = touch.clientY;
      event.preventDefault();
    });

    zone.addEventListener('touchmove', (event) => {
      if (!active) {
        return;
      }
      const touch = event.touches[0];
      const dx = touch.clientX - originX;
      const dy = touch.clientY - originY;
      const radius = 80;
      const magnitude = Math.min(1, Math.hypot(dx, dy) / radius);
      const angle = Math.atan2(dy, dx);
      this.state.axeX = Math.cos(angle) * magnitude;
      this.state.axeY = Math.sin(angle) * magnitude;
      event.preventDefault();
    });

    const end = () => {
      active = false;
      this.state.axeX = 0;
      this.state.axeY = 0;
    };

    zone.addEventListener('touchend', () => end());
    zone.addEventListener('touchcancel', () => end());
  }
}
