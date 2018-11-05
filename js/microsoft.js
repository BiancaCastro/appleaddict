function Microsoft (game){
    this.game=game;
    this.imgMicro= new Image();
    this.imgMicro.src= "imagenes/microsoft.png";
    this.x=200;
    this.y=20;
    this.w=40;
    this.h=40;
    this.vy=1;

}

Microsoft.prototype.draw=function(){
    this.game.ctx.drawImage(this.imgMicro, this.x, this.y, this.w, this.h);
}

Microsoft.prototype.move=function(){
    if(this.y>700){
     
        this.y=-20;
        
        this.x=(Math.random()*550);
       }
       this.y+=this.vy;
}