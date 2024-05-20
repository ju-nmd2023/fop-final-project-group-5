/*let image;
let starttext;*/

let gameScreen;
let gameScreen2;
let gameScreen3;
let x = 0;
let x2;
let transitionSpeed = 1;
const acceleration = 0.1;
let gameIsRunning = false;
let state = "start";
let hat;
let disk1X, disk1Y, disk2X, disk2Y, disk3X, disk3Y;
let mjölX, mjölY;
let mjölkX, mjölkY;
let kanelstångX, kanelstångY;
let buttonStart;
let buttonBake;
let disk = [];
let disk123;
let diskimg;
let disk1, disk2, disk3;

function setup() {
  createCanvas(1000, 800);
  stroke(255);
  //frameRate(60);
  hat = new Hat(width / 4, height / 1.7, 200, 140);
  disk123 = new Disk(20, 60, 110, 50, 0);
  diskimg = [disk1, disk2, disk3];

  x2 = 1000;
  disk1X = 500;
  disk1Y = 450;
  disk1Width = 150;
  disk1Height = 100;
  disk2X = 800;
  disk2Y = 500;
  disk2Width = 150;
  disk2Height = 200;
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
  hatY = height / 1.7;

  if (state === "start") {
    noLoop();
  }
  buttonStart = createImg("image/startbutton.png");
  buttonStart.position(350, 600);
  buttonStart.style("display", "none");
  buttonStart.mouseClicked(startGame);

  buttonBake = createImg("image/bakeagain.png");
  buttonBake.position(350, 600);
  buttonBake.style("display", "none");
  buttonBake.mouseClicked(startscreen);
}

function preload() {
  img = loadImage("image/start.png");
  starttext = loadImage("image/starttext.png");
  gameoverbackground = loadImage("image/gameoverbackground.png");
  sadboy = loadImage("image/sadboy.png");
  gamehat = loadImage("image/gamehat.png");
  gameScreen = loadImage("image/game.png");
  gameScreen2 = loadImage("image/game.png");
  startbutton = loadImage("image/startbutton.png");
  disk1 = loadImage("image/disk1.png");
  disk2 = loadImage("image/disk2.png");
  disk3 = loadImage("image/disk3.png");
  mjöl = loadImage("image/mjöl.png");
  mjölk = loadImage("image/mjölk.png");
  kanelstång = loadImage("image/kanelstång.png");
  bake = loadImage("image/bakeagain.png");
}

function startscreen() {
  image(img, 0, 0, 1500, 750);
  image(starttext, 0, height / 9);
  buttonStart.style("display", "block");
  buttonBake.style("display", "none");
}

function startGame() {
  state = "game";
  buttonStart.style("display", "none");
  hat.x = 0;
  hat.y = 50;
  loop();
}

function imageButtonClicked() {
  alert("image button clicked");
}

function game() {
  background(0);
  loop();

  x = x - transitionSpeed;
  x2 = x2 - transitionSpeed;

  image(gameScreen, x, 4, 1001, 750);
  image(gameScreen, x2, 4, 1001, 750);

  if (x <= -1000) {
    x = 1000;
  } else if (x2 <= -1000) {
    x2 = 1000;
  }

  disk1X -= transitionSpeed;
  disk2X -= transitionSpeed;
  disk3X -= transitionSpeed;

  image(disk1, disk1X, disk1Y, disk1Width, disk1Height);
  image(disk2, disk2X, disk2Y, disk2Width, disk2Height);
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

  // if (
  //   diskCollision(hat, disk1X, disk1Y, disk1Width, disk1Height) ||
  //   diskCollision(hat, disk2X, disk2Y, disk2Width, disk2Height) ||
  //   diskCollision(hat, disk3X, disk3Y, 100, 200)
  // ) {
  //   gameover();
  //   noLoop();
  // }

  hat.display();

  if (x <= -gameScreen.width) {
    x = 0;
  }
}

// function diskCollision() {
//   if (
//     hat.x + hat.width >= disk1X &&
//     hat.x <= disk1X + disk1Width &&
//     hat.y + hat.height >= disk1Y &&
//     hat.y <= disk1Y + disk1Height
//   ) {
//     return true;
//   }
//   return false;

function gameover() {
  state = "gameover";
  buttonBake.style("display", "block");
  noLoop();
  // image(bakeagain, 0, height / 9);
  image(gameoverbackground, 0, 0, 1000, 800);
  image(sadboy, width / 2 - sadboy.width / 2, height / 2 - sadboy.height / 2);
}

function winner() {}

function draw() {
  clear();

  if (state === "start") {
    startscreen();
    noLoop();
  } else if (state === "game") {
    game();
    disk123.display();
  } else if (state === "gameover") {
    gameover();
  }
}
//  } else if (state === "game") {
//   game();
//   hat.display();
//  } else if (state === "gameover") {
//   image(gameoverbackground, 0, 0);
//   image(sadboy, width / 2 - sadboy.width / 2, height / 2 - sadboy.height / 2);

//  fill(255);

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

class Hat {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = 0;
  }

  display() {
    if (state === "game") {
      image(gamehat, this.x, this.y, this.width, this.height);
      if (keyIsDown(38)) {
        this.moveUp();
      } else {
        this.moveDown();
      }
      this.y = constrain(this.y, 0, height - this.height);
    }
  }
  moveUp() {
    this.velocity -= 0.2;
    this.y += this.velocity;
  }

  moveDown() {
    this.velocity += 0.2;
    this.y += this.velocity;
  }
}

// if ( hat.x + hat.width >= disk2X &&
//   hat.x <= disk2X + disk2Width &&
//   hat.y + hat.height >= disk2Y &&
//   hat.y <= disk2Y + disk2Height
//   )

class Disk {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imageIndex = image;
  }

  display() {
    image(diskimg[this.imageIndex], this.x, this.y, this.width, this.height);
  }
}
