$(document).ready(function(){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var bernie = new Image();
var wall = new Image();
var trump = new Image();

function init(){
  bernie.src = 'img/Bernie.png';
  wall.src = 'img/brickwall.png';
  trump.src = 'img/Trump.png';
  window.requestAnimationFrame(draw);
}

function draw() {

  ctx.drawImage(bernie,15,55);

  ctx.drawImage(wall,25,175);
 
  ctx.drawImage(trump,15,305);

  window.requestAnimationFrame(draw);
}

init();

});