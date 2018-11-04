function Background (game){
    this.game= game;

    this.imgBack=new Image ();
    this.imgBack.src= 'imagenes/posible-fondo-2.jpg';
    this.x = 0;
    this.y = 0;
    this.w=100;
    this.h=100;
}


Background.prototype.draw = function() {
    this.game.ctx.drawImage(this.imgBack, this.x, this.y, this.w, this.h)
  
  };

  

