'use strict'

const input = document.querySelector('.page__main--input');
const btn = document.querySelector('.button');
const resetBtn = document.querySelector ('.reset-button');
const cluesText = document.querySelector('.clues__text');
const counter = document.querySelector('.clues__counter');

let timesTried=0;
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
        cluesText.innerHTML = '¡Has ganado, campeona!';
    }

    else if (inputNumber > 100) {
        cluesText.innerHTML = 'Demasiado alto, el número es menor que 100';
    }

    else if (inputNumber < 0) {
        cluesText.innerHTML = 'Prueba con un número positivo';
    }

    else if (inputNumber < myRandomNumber) {
        cluesText.innerHTML = 'Demasiado bajo, prueba otra vez';
    }

    else if (inputNumber > myRandomNumber) {
        cluesText.innerHTML = 'Demasiado alto, prueba otra vez';
    }

    else {
        cluesText.innerHTML = 'Introduce un número';
    }

    timesTried = timesTried+1;
    counter.innerHTML = timesTried;
}

function enterKey (event) {
    if (event.key==='Enter') {
        guessTheNumber();
    }
}

function startOver () {
    timesTried = 0;
    counter.innerHTML= timesTried;
    input.value = "";
    footerText.innerHTML = 'Escribe un número y dale a <em>prueba</em>';
    myRandomNumber = getRandomNumber(100); 
    console.log(myRandomNumber);
}

btn.addEventListener('click', guessTheNumber);
resetBtn.addEventListener('click', startOver);
document.addEventListener('keyup', enterKey);