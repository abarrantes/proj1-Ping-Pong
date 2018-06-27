
var Ball = function () {
  this.x = 400;
  this.y = Math.floor((Math.random() * 2 + 1) * 100); //move this to app.js and send arguments when calling function?
  this.speed = 5;
  this.slope = Math.floor((Math.random() * 3 + 1)); //move this to app.js and send arguments when calling function?
  var directionFormula = function () {
    if (Math.round(Math.random()) === 0) { return "r" } else { return "l" }
  }; //move this to app.js and send arguments when calling function?
  this.direction = directionFormula();
  this.radius = 10;
  this.startAngle = 0 * Math.PI;
  this.endAngle = 2 * Math.PI;
}

Ball.prototype.checkBallDirection = function () {
  if ((this.x + this.speed) > 790 && newBall.direction === 'r') {
    this.direction = 'l';
  }
  if ((this.x - this.speed) < 10 && this.direction === 'l') {
    this.direction = 'r';
  }
  if ((this.y - this.speed) < 0) {
    this.slope *= -1;
  }
  if ((this.y + this.speed) > 400) {
    this.slope *= -1;
  }
}

Ball.prototype.moveBallRight = function () {
  this.x += this.speed;
  this.y += this.slope;
  return this.x;
}

Ball.prototype.moveBallLeft = function () {
  this.x -= this.speed;
  this.y += this.slope;
  return this.x;
};

//I could add parameters to call for this arguments when running the code, so far paddles are always same w and h, and start alway in same position.
var Paddle = function (side) {
  this.y = 175;
  this.w = 5;
  this.h = 50;
  this.minY = 0 - this.h;
  this.maxY = 400;
  this.side = side;
}

Paddle.prototype.getPaddleSpeed = function () {
  return 5;
};

Paddle.prototype.movePaddles = function () {
  if (this.y > this.minY) {
    if (this.side === "l") {
      keysPressedPlayer1.forEach((eachKey) => {
        if (eachKey === "a") {
          this.y -= this.getPaddleSpeed();
        };
      });
    };
    if (this.side === "r") {
      keysPressedPlayer2.forEach((eachKey) => {
        if (eachKey === "ArrowUp") {
          this.y -= this.getPaddleSpeed();
        }
      });
    };
  };
  if (this.y < this.maxY) {
    if (this.side === "l") {
      keysPressedPlayer1.forEach((eachKey) => {
        if (eachKey === "z") {
          this.y += this.getPaddleSpeed();
        };
      });
    };
    if (this.side === "r") {
      keysPressedPlayer2.forEach((eachKey) => {
        if (eachKey === "ArrowDown") {
          this.y += this.getPaddleSpeed();
        };
      });
    };
  };
};