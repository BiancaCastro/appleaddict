function Apple (game){
    this.game = game;

    this.imgApple =new Image();
    this.imgApple.src = 'imagenes/apple.png';
    this.x=500;
    this.y=20;
    this.w=50;
    this.h=50;
    this.vy=1;
}


Apple.prototype.draw = function() {
    this.game.ctx.drawImage(this.imgApple, this.x, this.y, this.w, this.h);
  
  };


Apple.prototype.move = function() {
    if(this.y>700){
     
        this.y=-20;
        
        this.x=(Math.random()*550);
       }
       this.y+=this.vy;
         
  };