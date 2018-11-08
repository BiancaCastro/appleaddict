function Player(game) {
  this.game = game;
  this.imgPlayer = new Image();
  this.imgPlayer.src = "imagenes/steveMoves.png";
  this.x = 0;
  this.y = 450;
  this.w = 200;
  this.h = 240;
  this.vx=50;
  this.firstJobX=0;
  this.JobY=0;
  this.secondJobX=464;
  this.jobX=this.firstJobX;
  this.thirdJobX=925;
  this.jobX=this.firstJobX;
  this.setListeners();
  this.framesCounter=0;
  this.jobsModule = 10
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
  
  if(this.framesCounter % this.jobsModule===0){
    this.jobX =this.secondJobX;
  } 
  if(this.framesCounter % (this.jobsModule+10)===0){
    this.jobX=this.firstJobX;
  }
  if(this.framesCounter % (this.jobsModule+20)===0){
    this.jobX=this.thirdJobX;
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