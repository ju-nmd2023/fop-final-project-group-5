/*let image;
let starttext;*/

let gameScreen;
let gameScreen2;
let gameScreen3;
let x = 0;
let transitionSpeed = 7;
let velocity = 0;
const acceleration = 0.1;
let gameIsRunning = false;
let state = "start";
let hat = new Hat(width / 4, height / 1.7, 200, 140);
let disk1X, disk1Y, disk2X, disk2Y, disk3X, disk3Y;
let mjölX, mjölY;
let mjölkX, mjölkY;
let kanelstångX, kanelstångY;

function setup() {
  createCanvas(1000, 800);
  stroke(255);
  // frameRate(400);

  disk1X = 500;
  disk1Y = 450;
  disk1Width = 150;
  disk1Height = 100;
  disk2X = 800;
  disk2Y = 500;
  disk3X = 250;
  disk3Y = 400;

  mjölX = 200;
  mjölY = 400;
  mjölkX = 50;
  mjölkY = 450;
  kanelstångX = 650;
  kanelstångY = 430;

  hatWidth = 200;
  hatHeight = 140;
  hatX = width / 4;
  hatY = height / 1.7 + velocity;
}

function preload() {
  img = loadImage("image/start.png");
  starttext = loadImage("image/starttext.png");
  gameoverbackground = loadImage("image/gameoverbackground.png");
  sadboy = loadImage("image/sadboy.png");
  Hat = loadImage("image/gamehat.png");
  gameScreen = loadImage("image/game.png");
  gameScreen2 = loadImage("image/game.png");
  gameScreen3 = loadImage("image/game.png");
  startbutton = loadImage("image/startbutton.png");
  disk1 = loadImage("image/disk1.png");
  disk2 = loadImage("image/disk2.png");
  disk3 = loadImage("image/disk3.png");
  mjöl = loadImage("image/mjöl.png");
  mjölk = loadImage("image/mjölk.png");
  kanelstång = loadImage("image/kanelstång.png");
}

function startscreen() {
  image(img, 0, 0);
  image(starttext, 0, height / 9);

  image(img, 0, 0, 600, 300);

  let buttonStart = createImg("image/startbutton.png");
  buttonStart.position(100, 100);
  buttonStart.mouseClicked(imageButtonClicked);
}

function imageButtonClicked() {
  alert("image button clicked");
}

function game() {
  background(0);

  x = x - transitionSpeed;

  image(gameScreen, x, 4, 1000, 750);

  image(gameScreen2, x + gameScreen.width - 400, 4, 1000, 750);

  image(gameScreen3, x + 2 * (gameScreen.width - 400), 4, 1000, 750);

  disk1X -= transitionSpeed;
  disk2X -= transitionSpeed;
  disk3X -= transitionSpeed;

  image(disk1, disk1X, disk1Y, disk1Width, disk1Height);
  image(disk2, disk2X, disk2Y, 150, 100);
  image(disk3, disk3X, disk3Y, 100, 200);

  if (disk1X <= -150) {
    disk1X = 1000;
  }
  if (disk2X <= -150) {
    disk2X = 1000;
  }
  if (disk3X <= -100) {
    disk3X = 1000;
  }

  mjölX -= transitionSpeed;
  mjölkX -= transitionSpeed;
  kanelstångX -= transitionSpeed;

  image(mjöl, mjölX, mjölY, 170, 140);
  image(mjölk, mjölkX, mjölkY, 100, 160);
  image(kanelstång, kanelstångX, kanelstångY, 100, 120);

  if (mjölX <= -150) {
    mjölX = 1000;
  }
  if (mjölkX <= -150) {
    mjölkX = 1000;
  }
  if (kanelstångX <= -100) {
    kanelstångX = 1000;
  }

  if (x <= -gameScreen.width) {
    x = 0;
  }

  // if (keyIsDown(38)) {

  //  velocity = velocity - 0.2;

  // }
}

// function diskCollision(gamehat, disk1, disk2, disk3) {
//  if ( hatX + hatWidth >= disk1X &&
//   hatX <= disk1X + disk1Width &&
//   hatY + hatWidth >= disk1Y &&
//   hatY <= disk1Y + disk1Height
// )
// return true
//  }

function mousePressed() {
  loop();
}

function gameover() {
  image(gameoverbackground, 0, 0);
  image(sadboy);
}

function winner() {}

function draw() {
  startscreen();
  game();
  hat.display();

  fill(255);

  // if (gameIsRunning === true) {
  //    gamehat = gamehat + velocity;
  //    velocity = velocity + acceleration;
  //  }

  // if (state) {
  //   hatY = hatY + velocity;
  //   velocity = velocity + acceleration;
  // }

  //  if (gamehat > 120) {
  //    gameIsRunning = false;
  //   if (velocity <= 0.5) {
  //      state = "result";
  //    } else {
  //      gameover();
  //    }

  //  }

  //  }
}

class Hat {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display() {
    image(gamehat, this.x, this.y, this.width, this.height);
  }

  moveUp() {
    this.y += velocity;
  }
}
