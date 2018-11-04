function Microsoft (game){
    this.game=game;
    this.imgMicro= new Image();
    this.imgMicro.src= "imagenes/microsoft.png";
    this.x=0;
    this.y=0;
    this.w=40;
    this.h=40;

}

Microsoft.prototype.draw=function(){
    this.game.ctx.drawImage(this.imgMicro, this.x, this.y, this.w, this.h);
}