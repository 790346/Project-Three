

function Mover(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Attractor(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Repeller(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

Mover.prototype.update = function(){

  this.loc.add(this.vel);
  if(this.loc.x >= window.innerWidth || this.loc.x <= 0){
     this.vel.x *= -1;
    //ball.radius = Math.random() * 100 + 15;
  }
  if(this.loc.y >= window.innerHeight || this.loc.y <= 0){
     this.vel.y *= -1;
  }
  if(repeller.loc.x - this.loc.x <= 30 && repeller.loc.y - this.loc.y <= 30){
    repeller.loc.setDirection(this.vel.x*-1);
    repeller.loc.setDirection(this.vel.y*-1);
  }
  if(attractor.loc.x - this.loc.x <= 30 && attractor.loc.y - this.loc.y <= 30){
    this.loc.setDirection(attractor.vel);
//    this.loc.setDirection(attractor.vel);
  }
  this.render();
//  attractor.render();
//  repeller.render();
}
Attractor.prototype.update = function(){
  attractor = new Attractor(50, 12, 13, 10, 'red')
  if(this.loc.x >= window.innerWidth){
    this.loc.x = 0;
  }
  if(this.loc.x >= 0){
    this.loc.x = window.innerWidth;
  }
  if(this.loc.y >= window.innerHeight){
    this.loc.y = 0;
  }
  if(this.loc.y >= 0){
    this.loc.y = window.innerHeight;
  }
  attractor.render();
}

Repeller.prototype.update = function(){
  repeller = new Repeller(50, 12, 13, 10, 'black')
  if(this.loc.x >= window.innerWidth){
    this.loc.x = 0;
  }
  if(this.loc.x >= 0){
    this.loc.x = window.innerWidth;
  }
  if(this.loc.y >= window.innerHeight){
    this.loc.y = 0;
  }
  if(this.loc.y >= 0){
    this.loc.y = window.innerHeight;
  }
  repeller.render();
}

Mover.prototype.render = function(){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
}

Attractor.prototype.render = function(){
  console.log(this.loc.x);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
  ctx.stroke();
  ctx.fill();
}
Repeller.prototype.render = function(){
  console.log(this.loc.x);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
  ctx.stroke();
  ctx.fill();
}

//Attractor.prototype.update = function(){
  //  if(this.loc.x >= window.innerWidth || this.loc.x )
//}
