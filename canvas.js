window.onload = init;
var canvas;
var ctx;
var movers = [];
var attractor;
var repeller;

function init(){
  canvas = document.getElementById('cnv')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid red 3px';
  canvas.style.backgroundColor = randomColor();
  ctx = canvas.getContext('2d');
  loadMovers(2);
  loadAttractor();
  loadRepeller();
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(var i=0; i<movers.length; i++){
    movers[i].update();
  }
  attractor.update();
  repeller.update();


}

function loadMovers(numMovers){
  for(var i=0; i<numMovers; i++){

        var x = Math.random() * window.innerWidth + 1;
        var y = Math.random() * window.innerHeight + 1;
        var radius = Math.random() * 30 + 15;
        var dx = Math.random() * 10 + 1;
        var dy = Math.random() * 10 + 1;

        var loc = new JSVector(x, y);
        var vel = new JSVector(dx, dy);
        var acc = new JSVector(0,0);


        ctx.strokeStyle = randomColor();
        ctx.fillStyle = randomColor();
        movers.push(new Mover(loc, vel, acc, radius, randomColor()));
  }
}

function randomColor(){
  var r = Math.random() * 255|0;
  var g = Math.random() * 255|0;
  var b = Math.random() * 255|0;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function loadAttractor(){
  var x = Math.random() * window.innerWidth + 1;
  console.log(x);
  var y = Math.random() * window.innerHeight + 1;
  var radius = 50;
  var dx = Math.random() * 10 + 1;
  var dy = Math.random() * 10 + 1;
  var loc = new JSVector(x, y);
  var vel = new JSVector(dx, dy);
  var acc = new JSVector(0,0);


  ctx.strokeStyle = randomColor();
  ctx.fillStyle = randomColor();
  attractor = new Attractor(loc, vel, acc, radius, 'red');
}

function loadRepeller(){
  var x = Math.random() * window.innerWidth + 1;
  var y = Math.random() * window.innerHeight + 1;
  var radius = 45;
  var dx = Math.random() * 10 + 1;
  var dy = Math.random() * 10 + 1;

  var loc = new JSVector(x, y);
  var vel = new JSVector(dx, dy);
  var acc = new JSVector(0,0);


  ctx.strokeStyle = randomColor();
  ctx.fillStyle = randomColor();
  repeller = new Repeller(loc, vel, acc, radius, 'black');
}
//setInterval(loadMover, 6000);
