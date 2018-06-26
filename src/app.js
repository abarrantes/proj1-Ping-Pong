
var newBall = new Ball();
var newLeftPaddle = new Paddle();
var newRightPaddle =  new Paddle();
var start;

importCourtImage()

function startGame(){
  
  ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,800,400);
  
  
  newLeftPaddle.drawLeftPaddle();
  newRightPaddle.drawRightPaddle();
  newBall.checkBallDirection();
  checkIfPonintOnLeft()

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
  // if (newBall.x == 800){clearInterval(start)};
}

function getPaddleDirection(){
  return 10;
}

function checkIfPonintOnLeft() {
  if(newBall.x - newBall.speed < 10 
  && (newBall.y < newLeftPaddle.y ||
    newBall.y > newLeftPaddle.y+newLeftPaddle.h)){
    alert('Point!')
    
  }

}

document.getElementById("start-button").onclick = function() {
  start = setInterval(startGame,20);
};

document.getElementById("pause-button").onclick = function() {
  clearInterval(start)
};



  document.onkeydown = function(event) {
    if (event.key ==='ArrowUp'){
      event.preventDefault(); // what is this for???
      console.log(event.key)
      newLeftPaddle.y -= getPaddleDirection();
    }
    if (event.key ==='ArrowDown'){
      console.log(event.key)
      newLeftPaddle.y += getPaddleDirection();
    }
  }


// var movePaddle = setInterval(startMovingPaddle,1);

// function startMovingPaddle(){
  
//   canvas.addEventListener("mousemove", function(event) {
//     myFunction(event);
//   });
  
//   function myFunction(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     var coor = "Coordinates: (" + x + "," + y + ")";
//     document.getElementById("coordinates").innerHTML = coor;
//     return y;
//   };

//   newLeftPaddle.drawLeftPaddle(myFunction(e));

// }