/*let image;
let starttext;*/

let gameScreen;
let gameScreen2;
let gameScreen3;
let x = 0;
let transitionSpeed = 5;
let velocity = 0.2;
const acceleration = 0.1;
let gameIsRunning = false;
let state = "start";
let hatX;
let hatY;

function setup() {
  createCanvas(1000, 800);
  stroke(255);
  frameRate(400);

let hatX = width / 4;
let hatY = height / 1.7 + velocity;
}

function preload() {
  img = loadImage("image/start.png");
  starttext = loadImage("image/starttext.png");
  gameoverbackground = loadImage("image/gameoverbackground.png");
  sadboy = loadImage("image/sadboy.png");
  gamehat = loadImage("image/gamehat.png");
  gameScreen = loadImage("image/game.png");
  gameScreen2 = loadImage("image/game.png");
  gameScreen3 = loadImage("image/game.png");
  startbutton = loadImage("image/startbutton.png");
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

  image(gamehat, width / 4, height / 1.7, 200, 140);

  if (x <= -gameScreen.width) {
    x = 0;
  }

  if (keyIsDown(38)) {
    velocity = velocity - 0.2;
  }

}
function mousePressed() {
  loop();
}

function gameover() {
  image(gameoverbackground, 0, 0);
  image(sadboy, width / 6, height / 9);
}

function winner() {}

function draw() {
  startscreen();
  game();

  fill(255);


// if (state === "start") {
//   startscreen();
// } else if (state === "game") {
//  game();
// } else if (state === "result") {
//    gameover();
//  }

// if (gameIsRunning === true) {
//    gamehat = gamehat + velocity;
//    velocity = velocity + acceleration;
//  }

//  if (gamehat > 120) {
//    gameIsRunning = false;
//   if (velocity <= 0.5) {
//      state = "result";
//    } else {
//      gameover();
//    }

//  }

}

