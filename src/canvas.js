
function importCourtImage() {
  var courtCanvas = document.getElementById("courtCanvas");
  courtCtx = courtCanvas.getContext("2d");
  var courtImage = new Image();
  courtImage.onload = function () {
    courtCtx.drawImage(courtImage, 0, 0, 800, 400);
  };
  courtImage.src = './images/court-black-01.png';
}

Ball.prototype.drawBall = function () {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 255, 255,100)'
  ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, true);
  ctx.fill();
}

Paddle.prototype.drawLeftPaddle = function () {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 255, 255,100)'
  ctx.fillRect(2, this.y, this.w, this.h);
};

Paddle.prototype.drawRightPaddle = function () {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 255, 255,100)'
  ctx.fillRect(793, this.y, this.w, this.h);
};
