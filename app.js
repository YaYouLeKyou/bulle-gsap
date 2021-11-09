console.clear();

class Circle {
  constructor({ x, y, radius }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, TAO);
    ctx.fill();
  }
}

function makeCircles() {
  for (let i = 0; i < numCircles; i++) {
    let newX = gsap.utils.random(0, vw);
    let newY = gsap.utils.random(0, vh);
    let newRadius = gsap.utils.random(1, 10);
    let newCircle = new Circle({ x: newX, y: newY, radius: newRadius });
    circles.push(newCircle);
  }
}

let TAO = Math.PI * 2;
let numCircles = 200;
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let vw = (canvas.width = innerWidth);
let vh = (canvas.height = innerHeight);

let circles = [];

makeCircles();

const tl = gsap.timeline().to(circles, {
  duration: 60, //randomize?
  y: () => 1 - gsap.utils.random(100, 500),
  repeat: -1,
  ease: 'none',
});

gsap.ticker.add(update);

function update() {
  ctx.clearRect(0, 0, vw, vh);

  for (let i = 0; i < numCircles; i++) {
    circles[i].draw();
  }
}
