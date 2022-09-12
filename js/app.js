/* Pseudo-code: 
// 1. Define the variable that will track the state of the game: winner (win or lose are the only options)
// 2. Cached elements: 
// Message element: shows messages of the goblins mood
  Countdown: stores the timer and countdown 
3. Initialize the game with init function: 
  // Call init function 
  // set winner to null 
  timer 
  // call render function at the end 
4. Render the game with render function: 
  Render a message based on what is happening in the game (winner: You won! / loser: you lost!)
  render timer 
  progress bar 
! Functions needed: 
  -countdown function 
  -Event listeners:
    // handle click for start button (intro screen)
    // handle click for each of the goblins needs (food, toys, gold) to deliver the need to the goblin
  -scoring function: each of the needs will have an assigned point value -when added together will reach the min number needed to win 
  -getWinner function - display message + confetti (if...else...)

  // 5. Reset button function - create an event listener for the reset button  that will call init function 
  create function to show reset button on win/lose screen 

  *Styling notes:
  - to add audio: fantasy music (very low volume)
  - light/dark mode - if there is time! 
  - Intro page: Drop in with the logo -> animate.css 
    fade out instructions when player presses start 


*/ 

/*-------------------------------- Constants --------------------------------*/




/*---------------------------- Variables (state) ----------------------------*/

let winner, score
let min,sec,seconds = 0 

/*------------------------ Cached Element References ------------------------*/

let foodBtn = document.querySelector("#food")
let moneyBtn = document.querySelector("#money")
let toyBtn = document.querySelector("#toy")
// handleClick();
// foodBtn.myParam = 5;
// let moneyBtn = handleClick();
// moneyBtn.myParam = 10;
// handleToy();
const startBtn = document.querySelector("#start-button")
const resetBtn = document.querySelector("#reset-button")
let messageEl = document.querySelector("#message")
const countdownEl = document.querySelector("#countdown")




/*----------------------------- Event Listeners -----------------------------*/

//handleClick(evt) {
    //totalScore += evt.currentTarget.myParam;
// }

// foodBtn.addEventListener('click', handleFood)
// moneyBtn.addEventListener('click', handleMoney)
// toyBtn.addEventListener('click', handleToy)
// startBtn.addEventListener('click', render)
// resetBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init()

// function needsButtons() {
//   foodBtn.removeAttribute('hidden')
//   moneyBtn.removeAttribute('hidden')
//   toyBtn.removeAttribute('hidden')
// }

function init(){
  winner = null 
  score = 0 
  render()
}

function render() {
let timer = setInterval (() => {
  min = Math.floor(seconds / 60),
  sec = seconds % 60
  if (sec < 10) {
    countdownEl.textContent = `${min}:0${sec}`
  } else {
    countdownEl.textContent = `${min}:${sec}`
    }
  }, 1000)
 

/*
if (winner === null) {
    if(turn === 1) {
      messageEl.textContent = "Yummy sushi! Player one - it's your turn!"
    } else {
      messageEl.textContent = "Chinese food? Delish! Player two - it's your turn!"
    }
  } else if (winner === 'T') {
    messageEl.textContent = "Why not both? It's a tie!"
  } else if (winner === 1) {
    messageEl.textContent = "Good choice! Sushi wins!"
  } else if (winner === -1) {
    messageEl.textContent = "Chinese food wins - sign me up! "
  }
*/
}

//addScore function 

//message function

//timer function
function renderTime() {
min = Math.floor(seconds / 60)
  sec = seconds % 60
  if (sec < 10) {
    timerEl.textContent = `${min}:0${sec}`
  } else {
    timerEl.textContent = `${min}:${sec}`
  }
}
// show reset button on win/lose screen 