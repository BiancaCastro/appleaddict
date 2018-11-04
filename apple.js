function Apple (game){
    this.game = game;

    this.imgApple =new Image();
    this.imgApple.src = 'imagenes/apple.png';
    this.x=20;
    this.y=20;
    this.w=50;
    this.h=50;
}


Apple.prototype.draw = function() {
    this.game.ctx.drawImage(this.imgApple, this.x, this.y, this.w, this.h);
  
  };


