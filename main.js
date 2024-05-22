/*let image;
let starttext;*/

let gameScreen;
let gameScreen2;
let gameScreen3;
let x = 0;
let x2;
let transitionSpeed = 3;
const acceleration = 0.1;
let gameIsRunning = false;
let state = "start";
let hat;
// let kanelstångX, kanelstångY;
let buttonStart;
let buttonBake;
let disk = [];
let disks = [];
let disk123;
let diskimg;
let disk1, disk2, disk3;
let collectibles = [];
let mjöl, mjölk, kanelstång, smör, socker, ägg;
let collectiblesimg;
let collectible = [];

function setup() {
  createCanvas(1000, 800);
  stroke(255);
  //frameRate(60);
  hat = new Hat(width / 4, height / 1.7, 200, 140);
  // disk123 = new Disk(20, 60, 110, 50, 0);

  diskimg = [disk1, disk2, disk3];
  collectiblesimg = [mjöl, mjölk, kanelstång, smör, socker, ägg];

  x2 = 1000;

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

  disks.push(new Disk(500, 450, 150, 100, 0));
  disks.push(new Disk(800, 500, 150, 200, 1));
  disks.push(new Disk(250, 400, 100, 200, 2));

  collectibles.push(new Collectible(200, 400, 170, 140, 0));
  collectibles.push(new Collectible(50, 450, 100, 160, 1));
  collectibles.push(new Collectible(650, 430, 100, 120, 2));
  collectibles.push(new Collectible(470, 420, 120, 140, 3));
  collectibles.push(new Collectible(270, 300, 150, 120, 4));
  collectibles.push(new Collectible(550, 450, 150, 100, 5));
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
  smör = loadImage("image/smör.svg");
  socker = loadImage("image/socker.svg");
  ägg = loadImage("image/ägg.svg");
  bake = loadImage("image/bakeagain.png");
  winningscreeen = loadImage("image/winner.png");
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

// this next lines are from the website mdm web doc
function collisionDetection() {
  for (let i = 0; i < disks.length; i++) {
    const disk = disks[i];

    if (
      hat.x > disk.x &&
      hat.x < disk.x + disk.width &&
      hat.y > disk.y &&
      hat.y < disk.y + disk.height
    ) {
      console.log(hat.x, disk.x);
      gameover();
      return;
    }
  }
}

function collectCollectibles() {
  console.log(collectibles);
  for (let i = 0; i < collectibles.length; i++) {
    const collectible = collectibles[i];

    if (
      hat.x < collectible.x + collectible.width &&
      hat.x + hat.width > collectible.x &&
      hat.y < collectible.y + collectible.height &&
      hat.y + hat.height > collectible.y
    ) {
      collectibles.splice(i, 1);
      if (collectibles.length === 0) {
        state = "winning";
      }
      return;
    }
  }
}

function game() {
  background(0);
  loop();
  collisionDetection();
  collectCollectibles();

  x = x - transitionSpeed;
  x2 = x2 - transitionSpeed;

  image(gameScreen, x, 4, 1001, 750);
  image(gameScreen, x2, 4, 1001, 750);

  if (x <= -1000) {
    x = 1000;
  } else if (x2 <= -1000) {
    x2 = 1000;
  }

  // mjölX -= transitionSpeed;
  // mjölkX -= transitionSpeed;
  // kanelstångX -= transitionSpeed;

  // image(mjöl, mjölX, mjölY, 170, 140);
  // image(mjölk, mjölkX, mjölkY, 100, 160);
  // image(kanelstång, kanelstångX, kanelstångY, 100, 120);

  // if (mjölX <= -150) {
  //   mjölX = 1000;
  // }
  // if (mjölkX <= -150) {
  //   mjölkX = 1000;
  // }
  // if (kanelstångX <= -100) {
  //   kanelstångX = 1000;
  // }

  for (let i = 0; i < disks.length; i++) {
    disks[i].move();
    disks[i].display();
  }

  for (let i = 0; i < collectibles.length; i++) {
    collectibles[i].move();
    collectibles[i].display();
  }

  hat.display();

  if (x <= -gameScreen.width) {
    x = 0;
  }

  if (state === "gameover") {
    noLoop();
    gameover();
  }
}

function gameover() {
  state = "gameover";
  buttonBake.style("display", "block");
  noLoop();
  // image(bakeagain, 0, height / 9);
  image(gameoverbackground, 0, 0, 1000, 800);
  image(sadboy, width / 2 - sadboy.width / 2, height / 2 - sadboy.height / 2);
}

function winner() {
  state = "winning";
  image(winningscreeen, 0, 0, 1000, 800);
  noLoop();
  buttonBake.style("display", "block");
}

function draw() {
  clear();

  if (state === "start") {
    startscreen();
    noLoop();
  } else if (state === "game") {
    game();
  } else if (state === "gameover") {
    gameover();
  } else if (state === "winning") {
    winner();
  }
}

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

class Disk {
  constructor(x, y, width, height, imageIndex) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imageIndex = imageIndex;
  }

  display() {
    image(diskimg[this.imageIndex], this.x, this.y, this.width, this.height);
  }

  moveUp() {
    this.y += 5;
  }

  move() {
    this.x -= 3;
    if (this.x <= -this.width) {
      this.x = width;
    }
  }
}

class Collectible {
  constructor(x, y, width, height, imageIndex) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imageIndex = imageIndex;
  }

  display() {
    image(
      collectiblesimg[this.imageIndex],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  moveUp() {
    this.y += 5;
  }

  move() {
    this.x -= 3;
    if (this.x <= -this.width) {
      this.x = width;
    }
  }
}
