/*let image;
let starttext;*/

let x = 0;

function setup() {
  createCanvas(1000, 800);
  stroke(255);
  frameRate(50);
  noLoop();
}

function preload() {
  img = loadImage("image/start.png");
  starttext = loadImage("image/starttext.png");
  gameoverbackground = loadImage("image/gameoverbackground.png");
  sadboy = loadImage("image/sadboy.png");
  gamescreen = loadImage("image/gamescreen.png");
}

function startscreen() {
  image(img, 0, 0);
  image(starttext, 0, height / 9);

  image(img, 0, 0, 600, 300);

  let buttonStart = createImg("image/startbutton.png");
  buttonStart.position(10, 10);
  buttonStart.mouseClicked(imageButtonClicked);
}

function imageButtonClicked() {
  alert("image button clicked");
}

function gamescreen() {
  image(game, 0, 0);
}

function gameover() {
  image(gameoverbackground, 0, 0);
  image(sadboy, width / 6, height / 9);
}

function winner() {}

function draw() {
  background(0);
  x = x - 1;
  if (x < 1) {
    x = width;
  }
  line(x, 0, x, x);
}

function mousePressed() {
  loop();
}
