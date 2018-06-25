var canvas;
var courtImage;
var ctx;

function drawCourt(){
  
  ctx.beginPath();
  ctx.fillStyle = 'rgba(28, 173, 28,100)'
  ctx.fillRect(0, 0, 800, 400);
  ctx.fillStyle = 'rgba(255, 255, 255,100)'
  ctx.moveTo(400,0);
  ctx.lineTo(400,800);
  ctx.stroke()
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



var newBall = new Ball();

var play = setInterval(startMoving,20);

function startMoving(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d"); // Create canvas
  ctx.clearRect(0,0,800,400);
  
  drawCourt();

  if((newBall.x + newBall.speed) > 800 && newBall.direction === 'r'){
    newBall.direction = 'l';
    // newBall.slope *= -1;
  }
  if((newBall.x - newBall.speed) < 0 && newBall.direction === 'l'){
    newBall.direction = 'r';
    // newBall.slope *= -1;
  }
  if((newBall.y - newBall.speed) < 0){
    newBall.slope *= -1;
  }
  if((newBall.y + newBall.speed) > 400){
    newBall.slope *= -1;
  }

  switch (newBall.direction) {
    case 'l':
      newBall.moveBallLeft();
      newBall.drawBall();
      break;
    case 'r':
      newBall.moveBallRight();
      newBall.drawBall();
      break;
    default:
      alert('error: went to default!!!')
      break;
  }

  // if (newBall.x == 800){clearInterval(play)};
}

// function importCourtImage(){
    //   canvas = document.getElementById("canvas");
    //   ctx = canvas.getContext("2d"); // Create canvas
    //   courtImage = new Image();
    //   courtImage.onload = function() {
    //     ctx.drawImage(courtImage, 0, 0,800,400);
    //   };
    //   courtImage.src = './images/clay-court.jpg';
    // }