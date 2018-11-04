function Game (canvas) {
    this.canvas =document.getElementById(canvas);
    this.ctx=this.canvas.getContext('2d'); 
   // this.fps=60;
    
    this.reset();

   
    
}

Game.prototype.reset= function(){
   this.background= new Background(this);
    this.player = new Player(this);
    this.apple= new Apple(this);
    this.microsoft=new Microsoft(this);

    
}

Game.prototype.draw= function(){
   this.background.draw();
    this.player.draw();
    this.apple.draw();
    this.microsoft.draw();
   
}


Game.prototype.start=function(){
//this.interval=setInterval(function(){

   // })

   this.draw();

   
 
    
}