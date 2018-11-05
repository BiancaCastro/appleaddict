function Background (game){
    this.game= game;

    this.imgBack=new Image ();
    this.imgBack.src= 'imagenes/fondo3.jpg';
    this.x = 0;
    this.y = 0;
    this.w=600;
    this.h=700;
}


Background.prototype.draw = function() {
    this.game.ctx.drawImage(this.imgBack, this.x, this.y, this.w, this.h)
  
  };

  

