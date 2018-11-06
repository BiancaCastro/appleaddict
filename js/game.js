function Game(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.score = 0;
  this.level = 0;
  this.reset();
  this.generateObjects();
}

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.objects = [];
};

Game.prototype.generateObjects = function() {
  this.objects.push(new Microsoft(this));
  this.objects.push(new Apple(this));
};

Game.prototype.clearObjects = function() {
  this.objects.filter(function(object) {
    return object.y >= 0;
  });
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.objects.forEach(function(object) {
    object.draw();
  });
};

Game.prototype.collision = function() {
  return this.objects.some(
    function(object) {
      if (
        this.player.x + this.player.w >= object.x &&
        this.player.x < object.x + object.w &&
        this.player.y + this.player.h >= object.y &&
        object.y + object.h >= this.player.y
      ) {
        this.counter(object);
        object.y = -100;
        object.x = (Math.random()*550);
        return true;
      }
    }.bind(this)
  );
};

Game.prototype.move = function() {
  this.player.move();
  this.objects.forEach(function(object) {
    object.move();
  });
};

Game.prototype.counter = function(object) {
  if (object.name === "apple") {
    document.getElementById("points-js").innerHTML =this.score += 1;
  }
  if (object.name === "microsoft") {
    document.getElementById("points-js").innerHTML =this.score -= 2;
  }
  if (this.score < 0) {
    this.gameOver();
  }
  if (this.score >= 10) {
    document.getElementById("level-js").innerHTML=this.level+=1;
    if(this.score=10){
      document.getElementById("points-js").innerHTML=this.score=0;  
    } 
  }
};


Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();
  console.log("FINAL");
};

Game.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.clear();
      this.draw();
      this.move();
      if (this.collision()) {
        console.log(this.level);
        console.log(this.score)
       
      }
    }.bind(this),
    1000 / this.fps
  );
};

//Change HTML
Game.prototype.write=function(){

  document.getElementById("points").innerHTML = "Paragraph changed!";
}