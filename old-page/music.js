const Music = new Audio("./HipShopLoop.mp3");
var Playing = false;

const BackgroundNotOpaque = 0;
const BackgroundOpaque = 0.3;

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
        startMusic();
    }
}

function Scroll(event) {
    const DistanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
    const MakeOpaque = DistanceToBottom <= 5;

    if (MakeOpaque) {
        document.body.style.backgroundImage =
        'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("./backgrounds/Catwalks.png")';
    }
    else {
        document.body.style.backgroundImage =
        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("./backgrounds/CatWalks.png")';
    }
}

window.addEventListener("click", Click);
window.addEventListener("scroll", Scroll);