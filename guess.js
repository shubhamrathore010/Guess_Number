let randomNumber = parseInt(Math.random() * 10 +1);
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas') 

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault()
       const guess = (parseInt(userInput.value))
    //    console.log(guess);
       validateGuess(guess)
    })
}

 function validateGuess(guess){
      if(isNaN(guess)){
        alert('Please enter a valid number')
        butt
      } else if(guess < 1) {
        alert('Please enter positive number')
      } else if (guess >10){
        alert('Please under 10')
      } else {
        if (numGuess === 6){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
      }      
 }

 function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage('You guessed right')
    // submit.disable = true;
    submit.setAttribute('disabled', '')
    userInput.setAttribute('disabled', '')
    endGame()

  } else if (guess < randomNumber) {
    displayMessage('Number is too low')
  } else if (guess > randomNumber){
    displayMessage('Number is too hight')
  }
 }

 function displayGuess(guess){
     userInput.value = ''
     guessSlot.innerHTML += `${guess}, `
     numGuess++;
     remaining.innerHTML = `${5 - numGuess}`
     if(remaining < 1){
        endGame()
     }

 }

 function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
 }
 function endGame(){
    
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
 }

 function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${5 - numGuess} `;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
});

}