const Music = new Audio("../HipShopLoop.mp3");
var Playing = false;


Music.volume = 0.7;
Music.loop = true;

function startMusic() {
    if (Playing) {
        Music.pause();
    }
    else {
        Music.play();
    }
    
    Playing = !Playing;
}

function Click(event) {
    const WasLink = event.target.closest("a");

    if (!WasLink) {
        startMusic()
    }
}

window.addEventListener("click", Click);