function Player(game) {
  this.game = game;
  this.imgPlayer = new Image();
  this.imgPlayer.src = "imagenes/muñecoSTEVE.png";
  this.x = 0;
  this.y = 450;
  this.w = 200;
  this.h = 240;
  this.vx=50;
  this.setListeners();
}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.imgPlayer,
    this.x,
    this.y,
    this.w,
    this.h
  )
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