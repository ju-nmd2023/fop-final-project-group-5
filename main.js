/*let image;
let starttext;*/

let gameScreen;
let gameScreen2;
let gameScreen3;
let x = 0;
let transitionSpeed = 5;
let player;
let gravity = 0.6;
let jumpForce = -12;
let isJumpinmg = false;


function setup() {
  createCanvas(1000, 800);
  stroke(255);
  frameRate(300);
}

function preload() {
  img = loadImage("image/start.png");
  starttext = loadImage("image/starttext.png");
  gameoverbackground = loadImage("image/gameoverbackground.png");
  sadboy = loadImage("image/sadboy.png");
  gameScreen = loadImage("image/game.png");
  gameScreen2 = loadImage("image/game.png");
  gameScreen3 = loadImage("image/game.png");
}

player = {
  width: 50,
  height: 50,
  velocityY: 0
};


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

function game() {
background(0);
  x = x - transitionSpeed;

  image(gameScreen, x, 4, 1000, 750);

  image(gameScreen2, x + gameScreen.width - 400, 4, 1000, 750);

  image(gameScreen3, x + (2 * (gameScreen.width - 400)), 4, 1000, 750);

    if (x <= -gameScreen.width) {
    x = 0;
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
game();

fill(255);
rect(player.x, player.y, player.width, player.height);


player.velocityY += gravity;
  player.y += player.velocityY;

  if (player.y >= height - player.height) {
    player.y = height - player.height;
    player.velocityY = 0;
    isJumping = false;
  }

  if (keyIsPressed && !isJumping && keyCode === UP_ARROW) {
    player.velocityY = jumpForce;
    isJumping = true;
  }

  if (x <= -gameScreen.width) {
    x = 0;
  }
}
  
