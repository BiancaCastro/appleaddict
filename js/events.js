
        document.querySelector("#begin").onclick = function () {
            startGame();
            document.querySelector("#presentation").style.display = "none";
            document.querySelector("#new-game").style.display = "block";
        }
        document.querySelector(".no-repeat").onclick = function () {
            window.location.href = "https://www.google.es/";
        }
        document.querySelector(".repeat").onclick = function () {
            document.querySelector("#game-over").style.display="none";
            startGame();
            document.querySelector("#audio").src="./audio/spaceMusic.mp3";
        }
        