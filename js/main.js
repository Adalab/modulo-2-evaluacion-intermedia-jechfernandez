'use strict'

const input = document.querySelector('.page__main--input');
const btn = document.querySelector('.btn');
const footerText = document.querySelector('.page__footer--text');
const counter = document.querySelector('.page__footer--counter');

let n=0;
counter.innerHTML=0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
let myRandomNumber = getRandomNumber(100); 
console.log(myRandomNumber);

function guessTheNumber(){
    const inputNumber = parseInt(input.value);
    console.log(inputNumber);

    if (inputNumber === myRandomNumber) {
        footerText.innerHTML = '¡Has ganado, campeona!';
    }

    else if (inputNumber < myRandomNumber) {
        footerText.innerHTML = 'Demasiado bajo';
    }

    else if (inputNumber > myRandomNumber) {
        footerText.innerHTML = 'Demasiado alto';
    }

    else {
        footerText.innerHTML = 'Introduce un número';
    }

    n = n+1;
    counter.innerHTML = n;
}

function enterKey (event) {
    if (event.key==='Enter') {
        guessTheNumber();
    }
}


btn.addEventListener('click', guessTheNumber);
document.addEventListener('keyup', enterKey);