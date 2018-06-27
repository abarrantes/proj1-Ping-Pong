
var newBall = new Ball();
var newLeftPaddle = new Paddle("l");
var newRightPaddle = new Paddle("r");
var keysPressedPlayer1 = [];
var keysPressedPlayer2 = [];
var start;
var puntos1 = 0;
var puntos2 = 0;
var difficulty = 15;
var level = 1;

document.getElementById("start-button").onclick = function () {
  if (!$(this).hasClass("disabled")) {
    start = setInterval(startGame, difficulty);
    $(this).toggleClass("disabled");
    $("#pause-button").toggleClass("disabled");
  }
};

document.getElementById("pause-button").onclick = function () {
  if (!$(this).hasClass("disabled")) {
    clearInterval(start);
    $(this).toggleClass("disabled");
    $("#start-button").toggleClass("disabled");
  }
};

document.onkeydown = function (event) {
  if (event.key === "a" || event.key === "z") {
    keysPressedPlayer1.push(event.key)
  };
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    keysPressedPlayer2.push(event.key);
  }
};

document.onkeyup = function (event) {
  if (event.key === "a" || event.key === "z") {
    keysPressedPlayer1.splice(keysPressedPlayer1[0], keysPressedPlayer1.length);
  }
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    keysPressedPlayer2.splice(keysPressedPlayer2[0], keysPressedPlayer2.length);
  }
};

importCourtImage();

function startGame() {
  var canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 800, 400);

  newLeftPaddle.movePaddles()
  newLeftPaddle.drawLeftPaddle();

  newRightPaddle.movePaddles()
  newRightPaddle.drawRightPaddle();

  if (checkIfPonintOnLeft()) {
    ctx.clearRect(0, 0, 800, 400); // Here I need to insert a functionality to celabrate the score, other wise is to sutill because the game does not stop. I want the game to not stop.
  }
  if (checkIfPonintOnRight()) {
    ctx.clearRect(0, 0, 800, 400); // Here I need to insert a functionality to celabrate the score, other wise is to sutill because the game does not stop. I want the game to not stop.
  }

  checkIfPlayer1Wins()
  checkIfPlayer2Wins()

  newBall.checkBallDirection();
  switch (newBall.direction) {
    case "l":
      newBall.moveBallLeft();
      newBall.drawBall();
      break;
    case "r":
      newBall.moveBallRight();
      newBall.drawBall();
      break;
    default:
      alert("error: went to default!!!");
      break;
  }

  if(level === 1 && puntos1+puntos2 >= 10){
    level = 2;
    newBall.speed += 5;
  }

  if(level === 2 && puntos1+puntos2 >= 20){
    level = 3;
    newBall.speed += 5;
  }

  if(level === 3 && puntos1+puntos2 >= 30){
    level = 4;
    newBall.speed += 5;
  }

}

function checkIfPonintOnLeft() {
  if (
    newBall.x - newBall.speed < 10 &&
    (newBall.y < newLeftPaddle.y ||
      newBall.y > newLeftPaddle.y + newLeftPaddle.h)
  ) {
    puntos2 += 1;
    $("#puntos2").html(puntos2);
    return true;
  }
  if (newBall.x === 10) { affectSlopeWithLeftPaddle(keysPressedPlayer1)};
}

function checkIfPonintOnRight() {
  if (
    newBall.x + newBall.speed > 790 &&
    (newBall.y < newRightPaddle.y ||
      newBall.y > newRightPaddle.y + newRightPaddle.h)
  ) {
    puntos1 += 1;
    $("#puntos1").html(puntos1);
    return true;
  }
  if (newBall.x === 790) { affectSlopeWithRightPaddle(keysPressedPlayer2)};
}

//I have not inclueded this formula yet, i cannot put it inside the interval, it would change too quickly
function setDifficulty() {
  difficulty -= puntos1 + puntos2;
}

function affectSlopeWithLeftPaddle(array) {
  if (array.length > 0) {
    // affecting the slope on left side
    if (array.indexOf("a") !== -1 && newBall.slope < 0) {
      newBall.slope = newBall.slope * 1.5
    }
    if (array.indexOf("a") !== -1 && newBall.slope > 0) {
      newBall.slope = newBall.slope * 0.66
    }
    if (array.indexOf("z") !== -1 && newBall.slope < 0) {
      newBall.slope = newBall.slope * 0.66
    }
    if (array.indexOf("z") !== -1 && newBall.slope > 0) {
      newBall.slope = newBall.slope * 1.5
    }
  }
}

function affectSlopeWithRightPaddle(array) {
  if (array.length > 0) {
    // affecting the slope on left side
    if (array.indexOf("ArrowUp") !== -1 && newBall.slope < 0) {
      newBall.slope = newBall.slope * 1.5
    }
    if (array.indexOf("ArrowUp") !== -1 && newBall.slope > 0) {
      newBall.slope = newBall.slope * 0.66
    }
    if (array.indexOf("ArrowDown") !== -1 && newBall.slope < 0) {
      newBall.slope = newBall.slope * 0.66
    }
    if (array.indexOf("ArrowDown") !== -1 && newBall.slope > 0) {
      newBall.slope = newBall.slope * 1.5
    }
  }
}

function checkIfPlayer1Wins(){
  if(puntos1 > 20){
    clearInterval(start);
    $("#title").text("PLAYER ONE WON!!!!")
    setTimeout(function (){
      window.location.reload(true);
    }, 4000); 
  }
}

function checkIfPlayer2Wins(){
  if(puntos1 > 20){
    clearInterval(start);
    $("#title").text("PLAYER TWO WON!!!!")
    setTimeout(function (){
      window.location.reload(true);
    }, 4000); 
  }
}