let rendomNumber = (parseInt(Math.random()*100 + 1));

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  // ye dekhega ki number 1 and 100 ke bich mein hai ya nahi
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess < 1){
    alert('Please enter a number more than 1')
  } else if(guess > 100){
    alert('Please enter a number less than 100')
  } else{
    preGuess.push(guess)
  }
   
  if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`Game Over. Random number was ${rendomNumber}`)
    endGame()
  } else{
    displayGuess(guess)
    checkGuess(guess)
  }
}



function checkGuess(guess){
  // value jo hai wo rendom number ke equal hai ya nahi
  if(guess === rendomNumber){
    displayMessage(`You guessed it right`);
    endGame()
  } else if (guess < rendomNumber){
    displayMessage(`Number is too low`);
  } else if (guess > rendomNumber){
    displayMessage(`Number is too high `);
  }
}



function displayGuess(guess){
  // values ko clean karega , guesses ke arrays ko bhi update karega
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `;
  numGuess++
  remaning.innerHTML =`${11 - numGuess}`;
}

function displayMessage(msg){
  // lowOrHi ke ander bas msg pass karegenge or at it is print karega
  lowOrHi.innerHTML = `<h2> ${msg} </h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    rendomNumber = (parseInt(Math.random()*100 + 1));
    preGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaning.innerHTML =`${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

