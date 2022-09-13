/* Pseudo-code: 
// 1. Define the variable that will track the state of the game: winner (win or lose are the only options)
// 2. Cached elements: 
// Message element: shows messages of the goblins mood
//   Countdown: stores the timer and countdown 
// 3. Initialize the game with init function: 
//   // Call init function 
//   // set winner to null 
//   timer 
//   // call render function at the end 
// 4. Render the game with render function: 
  // Render a message based on what is happening in the game (winner: You won! / loser: you lost!)
  // render timer 
  progress bar 
! Functions needed: 
  -countdown function 
  -Event listeners:
    // handle click for start button (intro screen)
    // handle click for each of the goblins needs (food, toys, gold) to deliver the need to the goblin
  //-scoring function: each of the needs will have an assigned point value -when added together will reach the min number needed to win 
  //-getWinner function - display message + confetti (if...else...)

  // 5. Reset button function - create an event listener for the reset button  that will call init function 
  // create function to show reset button on win/lose screen 

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

let score = 0 
let donePlaying
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
const happinessBar = document.querySelectorAll('.progress-bar')
const theBar = document.querySelector('.progress')
let youWin = document.querySelector('#you-win')
let youLose = document.querySelector('#you-lose')


/*----------------------------- Event Listeners -----------------------------*/

foodBtn.addEventListener('click', handleClick)
moneyBtn.addEventListener('click', handleClick)
toyBtn.addEventListener('click', handleClick)
hideIntroBtn.addEventListener('click', hideIntro)
startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetGame)


/*-------------------------------- Functions --------------------------------*/

init()


function init(){
  donePlaying = false 
  score = 50
  theBar.className = 'progress-invis'
  happinessBar.item(0).setAttribute('style', 'width:0%')
}

let timeLeft = 29

function setTimer() { 
  countdownEl.innerText = 30
  let timer = setInterval(function() {
    countdownEl.innerText = timeLeft
	  timeLeft -= 1
    if (timeLeft <= 0 || donePlaying === true) {
      clearInterval(timer)
    }
    checkForWin()
  }, 1000)
}

function getRandomMessage(){
  return messageEl.textContent = randomNeeds[Math.floor(Math.random() * randomNeeds.length)]
}

function startGame(){
  let text = getRandomMessage() 
  messageEl.textContent = text
  startBtn.setAttribute('hidden', true)
  countdownEl.removeAttribute('hidden')
  theBar.className= 'progress'
  happinessBar.item(0).setAttribute('style', `width:${score}%`)
  setTimer()
}

function hideIntro() {
  foodBtn.removeAttribute('hidden')
  moneyBtn.removeAttribute('hidden')
  toyBtn.removeAttribute('hidden')
  startBtn.removeAttribute('hidden')
  messageEl.removeAttribute('hidden')
  mainChar.removeAttribute('hidden')
  countdownEl.removeAttribute('hidden')
  hideIntroBtn.setAttribute('hidden', true)
  rules.setAttribute('hidden', true)
  gameLogo.setAttribute('hidden', true)
}

function handleClick(evt) {
  giveItems(evt.target.id)
}

function giveItems(id) {
  console.log(messageEl)
  if((messageEl.textContent === 'Money Please!!') && id ==='money') {
    score += 5
    happinessBar.item(0).setAttribute('style', `width:${score}%`)
    getRandomMessage()
  } else if ((messageEl.textContent === 'May I have some pie?') && id ==='food'){
    score += 5
    happinessBar.item(0).setAttribute('style', `width:${score}%`)
    getRandomMessage()
  } else if ((messageEl.textContent === 'I want to play with my toys!') && id ==='toy'){
    score += 5
    happinessBar.item(0).setAttribute('style', `width:${score}%`)
    getRandomMessage()
  } else {
    score -= 15 
    happinessBar.item(0).setAttribute('style', `width:${score}%`)
  }
  checkForWin()
}


function checkForWin() {
  if (score >= 100) {
    youWin.removeAttribute('hidden')
    resetBtn.removeAttribute('hidden'),
    foodBtn.setAttribute('hidden', true),
    moneyBtn.setAttribute('hidden', true),
    toyBtn.setAttribute('hidden', true),
    countdownEl.setAttribute('hidden',true),
    theBar.className = 'progress-invis',
    messageEl.setAttribute('hidden',true),
    mainChar.setAttribute('hidden', true),
    donePlaying = true
  } else if ((score <= 0) || timeLeft === 0) {
    youLose.removeAttribute('hidden')
    resetBtn.removeAttribute('hidden'),
    foodBtn.setAttribute('hidden', true),
    moneyBtn.setAttribute('hidden', true),
    toyBtn.setAttribute('hidden', true),
    theBar.className = 'progress-invis',
    countdownEl.setAttribute('hidden',true),
    messageEl.setAttribute('hidden',true),
    mainChar.setAttribute('hidden', true),
    donePlaying = true
  } else {
    return
  }
}

function resetGame(){
  donePlaying= false
  score = 50
  timeLeft = 29
  countdownEl.innerText = ''
  foodBtn.removeAttribute('hidden')
  moneyBtn.removeAttribute('hidden')
  toyBtn.removeAttribute('hidden')
  startBtn.removeAttribute('hidden')
  messageEl.removeAttribute('hidden')
  messageEl.textContent = ''
  mainChar.removeAttribute('hidden')
  theBar.className = 'progress-invis'
  youWin.setAttribute('hidden', true)
  youLose.setAttribute('hidden', true)
  resetBtn.setAttribute('hidden', true)
}

