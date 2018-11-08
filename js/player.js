function Player(game) {
  this.game = game;
  this.imgPlayer = new Image();
  this.imgPlayer.src = "imagenes/stevejobs2.png";
  this.x = 0;
  this.y = 450;
  this.w = 100;
  this.h = 140;
  this.vx=50;
  this.firstJobX=0;
  this.JobY=0;
  this.secondJobX=495;
  this.jobX=this.firstJobX;
  this.setListeners();
  this.framesCounter=0;
}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.imgPlayer,
    this.jobX,
    0,
    460,
    553,
    this.x,
    this.y,
    this.w,
    this.h
    
  )
  this.animateImg();
};

Player.prototype.animateImg = function() {
  
  if(this.framesCounter%30===0){
    this.jobX =this.secondJobX;
  } 
  if(this.framesCounter%60===0){
    this.jobX=this.firstJobX;
    this.framesCounter=0;
  }

  
};

Player.prototype.move=function(){

  if(this.x<0){
     
    this.x=1;}
    if  (this.x>= 400){
     this.x=390;
   }

}

var KEY_LEFT=37;
var KEY_RIGHT=39;

Player.prototype.setListeners =function(){
  document.onkeydown = function(e) {
    e.preventDefault();
    switch(e.keyCode) {
      case KEY_LEFT: 
        this.x -= this.vx;
        break; 
      case KEY_RIGHT: 
        this.x += this.vx;
        break; 
    }
  }.bind(this);
}