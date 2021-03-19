const zoom = document.getElementById("zoom");
const win = document.getElementById("win");
const monke = document.getElementById("monke");

const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

const soundA = document.getElementById("A");
const soundS = document.getElementById("S");
const soundD = document.getElementById("D");
const soundF = document.getElementById("F");
const soundG = document.getElementById("G");

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
});

zoom.addEventListener('click', () => {
    header.className = "header zoom";
    main.className = "main zoom";
    footer.className = "footer zoom";
    soundA.src="./sounds/boom.wav";
    soundS.src="./sounds/clap.wav";
    soundD.src="./sounds/hihat.wav";
    soundF.src="./sounds/kick.wav";
    soundG.src="./sounds/openhat.wav";
});

win.addEventListener('click', () => {
    header.className = "header win";
    main.className = "main win";
    footer.className = "footer win";
    soundA.src="./sounds/boom.wav";
    soundS.src="./sounds/clap.wav";
    soundD.src="./sounds/hihat.wav";
    soundF.src="./sounds/kick.wav";
    soundG.src="./sounds/openhat.wav";
});

monke.addEventListener('click', () => {
    header.className = "header monke";
    main.className = "main monke";
    footer.className = "footer monke";
    soundA.src="./sounds/monkeA.wav";
    soundS.src="./sounds/monkeS.wav";
    soundD.src="./sounds/monkeD.mp3";
    soundF.src="./sounds/monkeF.wav";
    soundG.src="./sounds/monkeG.wav";
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));