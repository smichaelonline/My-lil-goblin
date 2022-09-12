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

const randomNeeds = [
  'Money Please!!',
  'May I have some pie?',
  'I want to play with my toys!'
]


/*---------------------------- Variables (state) ----------------------------*/

let winner, score
let min,sec,seconds = 0 

/*------------------------ Cached Element References ------------------------*/

let foodBtn = document.querySelector("#food")
let moneyBtn = document.querySelector("#money")
let toyBtn = document.querySelector("#toy")
const startBtn = document.querySelector("#start-button")
const hideIntroBtn = document.querySelector('#hide-intro')
const resetBtn = document.querySelector("#reset-button")
let messageEl = document.querySelector("#askForNeeds")
const countdownEl = document.querySelector("#countdown")
let rules = document.querySelector('#rules')
let mainChar = document.querySelector('#main-char')
let gameLogo = document.querySelector('#intro-logo')




/*----------------------------- Event Listeners -----------------------------*/

//handleClick(evt) {
    //totalScore += evt.currentTarget.myParam;
// }

// foodBtn.addEventListener('click', keepScore)
// moneyBtn.addEventListener('click', keepScore)
// toyBtn.addEventListener('click', keepScore)
hideIntroBtn.addEventListener('click', hideIntro)
startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', init)


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
 // foodBtn.removeAttribute('hidden')
 // moneyBtn.removeAttribute('hidden')
 // toyBtn.removeAttribute('hidden')
let timer = setInterval (() => {
  min = Math.floor(seconds / 60),
  sec = seconds % 60
  if (sec < 10) {
    countdownEl.textContent = `${min}:0${sec}`
  } else {
    countdownEl.textContent = `${min}:${sec}`
    }
  }, 1000)
}

function getRandomMessage(){
  return randomNeeds[Math.floor(Math.random() * randomNeeds.length)]
}

function startGame(){
  console.log('clicked')
  let text = getRandomMessage() 
  messageEl.textContent = text
}

function hideIntro() {
  //console.log('please work')
  foodBtn.removeAttribute('hidden')
  moneyBtn.removeAttribute('hidden')
  toyBtn.removeAttribute('hidden')
  startBtn.removeAttribute('hidden')
  messageEl.removeAttribute('hidden')
  mainChar.removeAttribute('hidden')
  hideIntroBtn.setAttribute('hidden', true)
  rules.setAttribute('hidden', true)
  gameLogo.setAttribute('hidden', true)
}

//addScore function 

// function keepScore(evt) {
//   console.log(evt)
// }
//   if ((randomNeeds[1]=== 'Money Please!!') && evt.target.id ==='food') {
//     score += 5
//   } else if {
//     ((randomNeeds[0]=== 'May I have some pie?') && evt.target.id ==='money') 
//     score += 15 
//   } else if{
//     ((randomNeeds[2]) === 'I want to play with my toys!' && evt.target.id ==='toy') 
//     score += 10 
//   }
// }
//   if (randomNeeds[1])
// }
//message function

//timer function

// show reset button on win/lose screen 