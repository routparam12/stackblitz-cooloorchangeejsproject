const randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrhigh');
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guesses) {
    if(isNaN(guesses)){
        alert('Please enter a valid number');
    }else if(guesses<1){
        alert('Please enter a number greater than 1');
    }else if(guesses>100){
        alert('Please enter a number less than 100');
        
    }else{    
        previousGuesses.push(guesses);
        if(numGuesses===10){
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        }else checkGuess(guesses < randomNumber);
            displayMessage('Number is Too Low! Try Again!');
        }
    }
 


function checkGuess(guesses) {
    
    if(guesses === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuesses}!`);
        endGame();
    }else if(guesses < randomNumber){
        displayMessage('Number is Too Low! Try Again!');

    }else if(guesses > randomNumber){
        displayMessage('Number is Too High! Try Again!');
    }    
}

function displayGuess(guesses) {    
    userInput.value = '';
    guessSlot.innerHTML += '${guesses} ';
    numGuesses++;
    remaining.innerHTML = '${11 - numGuesses}';
}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2> ${message}</h2>`;  
}

function newGame() {
    
}

function endGame() {
   userInput.value = ''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id='newgame'>Start New Game</h2>`;
   startOver.appendChild(p)
   playGame= false;
   newGame();
}

