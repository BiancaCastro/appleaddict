function Player(game) {
  this.game = game;
  this.imgPlayer = new Image();
  this.imgPlayer.src = "imagenes/muñecoSTEVE.png";
  this.x = 0;
  this.y = 0;
  this.w = 50;
  this.h = 75;
}

Player.prototype.draw = function() {
  
    this.imgPlayer.onload = function() {
        this.player.ctx.drawImage(
            this.imgPlayer,
            this.x,
            this.y,
            this.w,
            this.h
          )
      };
   
};
