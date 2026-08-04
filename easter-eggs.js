const Pluto = document.getElementById("Pluto")
const PlutoAudio = new Audio("./sounds/PlutoLaugh.ogg")

const Oneshot = document.getElementById("Niko")
const OneshotAudio1 = new Audio("./sounds/Oneshot1.wav")
const OneshotAudio2 = new Audio("./sounds/Oneshot2.wav")
var OneshotCounter = 0

const Lethal = document.getElementById("LethalCompany")
const LethalAudio = new Audio("./sounds/LethalCompany.mp3")
var LethalBoomboxToggled = false
LethalAudio.loop = true

const Minos = document.getElementById("Minos")
const MinosAudio1 = new Audio("./sounds/MinosSpeech.mp3")
const MinosAudio2 = new Audio("./sounds/MinosDie.wav")
var MinosDidSpeech = false
var MinosDead = false

// const HonkAudio = new Audio ("./Sounds/Honk.mp3")
// var DidntClickHonkThisTime = false

function PlutoClick() {
    // DidntClickHonkThisTime = true

    PlutoAudio.play()
}

function OneshotClick() {
    // DidntClickHonkThisTime = true
    
    if (OneshotCounter % 2 == 0) {
        OneshotAudio1.play()
    }
    else {
        OneshotAudio2.play()
    }

    OneshotCounter++
}

function LethalClick() {
    // DidntClickHonkThisTime = true

    LethalBoomboxToggled = !LethalBoomboxToggled
    if (LethalBoomboxToggled) {
        LethalAudio.play()
    }
    else {
        LethalAudio.pause()
    }
}

function MinosClick() {
    // DidntClickHonkThisTime = true

    if (!MinosDidSpeech) {
        MinosAudio1.play()
        MinosDidSpeech = true
    }
    else if (MinosDidSpeech & MinosAudio1.ended & !MinosDead) {
        MinosAudio2.play()
        MinosDead = true
        Minos.remove()
    }
}

// function HonkClick() {
//     if (!DidntClickHonkThisTime) {
//         HonkAudio.play()
//     }
//     DidntClickHonkThisTime = false
// }

Pluto.onmouseup = PlutoClick
Oneshot.onmouseup = OneshotClick
Lethal.onmousedown = LethalClick
Minos.onmouseup = MinosClick

// document.onmouseup = HonkClick
