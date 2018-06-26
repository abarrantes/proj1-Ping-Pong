var canvas;
canvas = document.getElementById("canvas");

var courtImage;
var ctx;

// por ahora lo estoy haciendo importando una imagen
// function drawCourt(){
  
  //   ctx.beginPath();
  //   ctx.fillStyle = 'rgba(28, 173, 28,100)'
  //   ctx.fillRect(0, 0, 800, 400);
  //   ctx.closePath()
  
  //   ctx.beginPath();
  //   ctx.moveTo(400,0);
  //   ctx.fillStyle = 'rgba(255, 255, 255,100)'
  //   ctx.lineTo(400,800);
  //   ctx.stroke()
  // }

  function importCourtImage(){
        courtCanvas = document.getElementById("courtCanvas");
        courtCtx = courtCanvas.getContext("2d");
        courtImage = new Image();
        courtImage.onload = function() {
        courtCtx.drawImage(courtImage, 0, 0,800,400);
        };
        courtImage.src = './images/court-green-01.png';
      }
  
var Ball = function(){
  this.x = 100;
  this.y = 50;
  this.speed = 5;
  this.slope = 0;
  this.direction = "r";
  this.radius = 10;
  this.startAngle = 0*Math.PI;
  this.endAngle = 2*Math.PI;
}

Ball.prototype.drawBall = function(){

  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 255, 0,100)'
  ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, true);
  ctx.fill();

}

Ball.prototype.moveBallRight = function(){
  this.x +=this.speed;
  this.y +=this.slope;
  return this.x
}

Ball.prototype.moveBallLeft = function(){
  this.x -= this.speed;
  this.y +=this.slope;
  return this.x
}

Ball.prototype.checkBallDirection = function(){
  if((this.x + this.speed) > 800 && newBall.direction === 'r'){
    this.direction = 'l';
  }
  if((this.x - this.speed) < 0 && this.direction === 'l'){
    this.direction = 'r';
  }
  if((this.y - this.speed) < 0){
    this.slope *= -1;
  }
  if((this.y + this.speed) > 400){
    this.slope *= -1;
  }
}

var Paddle = function(){
  this.y =45;
  this.w = 5;
  this.h = 50;
}

var newY;

Paddle.prototype.drawLeftPaddle = function(){
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 255, 255,100)'
  ctx.fillRect(2, this.y, this.w, this.h);
};

Paddle.prototype.drawRightPaddle = function(){
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 255, 255,100)'
  ctx.fillRect(793, this.y, this.w, this.h);
};
