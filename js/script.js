'use strict'

const ufo = document.querySelector('#ufo'),
      house = document.querySelector('#house'),
      gameOver = document.querySelector('#game_over'),
      retry = document.querySelector('#retry');



document.addEventListener('keydown', (k) => {
    if(k.code == 'Space') {
        jump();
        gameOver.style.display = 'none';
        retry.style.display = 'none';
        house.style.animationName = 'move';
    };
});

document.addEventListener('touchstart', () => {
    jump();
    gameOver.style.display = 'none';
    retry.style.display = 'none';
    house.style.animationName = 'move';
});

const jump = () => {
    if(ufo.classList != 'jump') {
        ufo.classList.add('jump');
    }
    setTimeout(() => {
        ufo.classList.remove('jump');   
    }, 500);
};

let liveCheck = setInterval(() => {
    let ufoTop = parseInt(window.getComputedStyle(ufo).getPropertyValue('top'));
    let houseLeft = parseInt(window.getComputedStyle(house).getPropertyValue('left'));

    for(let i = 0; i < 2; i++) {
        if(houseLeft > -110 && houseLeft < 125 && ufoTop > 210) {
            gameOver.style.display = 'block';
            retry.style.display = 'block';
            house.style.animationName = 'none';
        }
    }
}, 10);

jump();