# appleaddict
Appleaddict es un juego en el que te podrás poner a prueba para comprobar si eres realmente un auténtico fan de Apple.

Steve Jobs tiene que coger manzanas y esquivar microsofts. Para moverlo, simplemente tendrás que moverte con las flechas hacia la derecha 
o izquierda.
Si cojes las manzanas ganarás 1 punto, pero si cojes los iconos de Microsoft perderás 2 puntos. 
El juego comienza en el nivel 0, y si quieres ir subiendo, tendrás que acumular 4 puntos. Una  vez que cambies de nivel,
tus puntos volverán a 0. Si tus puntos son menos de 0, habrás perdido.
En cada nivel, la velocidad a la que caen los objetos se van incrementando exponencialmente; también la velocidad a la que Steve Jobs
mueve sus brazos.

- Parte del código de la que me siento más orgullosa:

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
        object.x = Math.random() * 550;
        return true;
      }
    }.bind(this)
  );
};


- Si volviese al mismo día que cambiaría de cómo he trabajado:


- Futuras mejoras que añadiría: 
*Mejorar y suavizar el movimiento del muñeco y cambiarlo.
*Una ventana final que te permitiese volver a jugar.
*Dos jugadores.
*Que cayesen más objetos: iphones, vidas...
*Que el juego tenga un final.

-La funcionalidad que más me ha costado: 
*Generar objetos que responden de manera diferente al colisionarse.
