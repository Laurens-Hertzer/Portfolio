// Light/Dark Schalter
const button = document.getElementById('theme-toggle');

button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode'); // Anschalten der light-class beim Body
});

// Canvas Partikel (nicht von mir)
const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
const MAX_PARTICLES = 200;

const mouse = {
  x: 0,
  y: 0,
};

c.width = window.innerWidth;
c.height = window.innerHeight;

function random(min, max) {
  return (Math.random() * (max - min) + min);
}

function distance(p1, p2) {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}

class Particle {
  constructor() {
    this.x = random(0, c.width);
    this.y = random(0, c.height);
    this.vx = random(-0.5, 0.5);
    this.vy = random(-0.5, 0.5);
    this.size = random(1, 5);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0) {
      this.x = c.width;
    }
    if (this.x > c.width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = c.height;
    }
    if (this.y > c.height) {
      this.y = 0;
    }
  }
}

const particles = [];

for (let i = 0; i < MAX_PARTICLES; i++) {
  particles.push(new Particle());
}

function update() {
  particles.forEach((particle) => {
    particle.update();
  });
}

function render() {
  // Überprüfen, ob der Light-Mode aktiv ist, um die Partikelfarbe anzupassen
  const isLightMode = document.body.classList.contains('light-mode');
  const lineColor = isLightMode ? '#0d1117' : '#fff';
  const dotColor = isLightMode ? '#f4f6f8' : 'black';

  particles.forEach((particle) => {
    particles.forEach((particle2) => {
      const d = distance(particle, particle2);
      if (d < 100) {
        ctx.fillStyle = lineColor;
        ctx.strokeStyle = lineColor;
        const d2 = distance(mouse, particle);
        if (d2 < 300) {
          ctx.globalAlpha = (1000 / d2) / 100;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.stroke();
        }
      }
    });
    ctx.fillStyle = dotColor;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2, true);
    ctx.fill();
  });
  
  ctx.globalAlpha = 1; // Alpha-Wert nach dem Zeichnen zurücksetzen
}

function loop() {
  requestAnimationFrame(loop);
  ctx.clearRect(0, 0, c.width, c.height);
  update();
  render();
}

function init() {
  mouse.x = c.width / 2;
  mouse.y = c.height / 2;
  loop();
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize', (e) => {
  c.width = window.innerWidth;
  c.height = window.innerHeight; // Passt die Höhe beim Resize korrekt an
});

init();