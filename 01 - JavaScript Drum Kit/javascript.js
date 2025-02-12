window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    if(!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    const keyIcon = document.querySelector(`.key[data-key="${e.keyCode}"`);
    keyIcon.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}
