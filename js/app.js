
const randomNeeds = [
  'Money Please!!',
  'May I have some pie?',
  'I want to play with my toys!'
]

let score = 0 
let donePlaying
let min,sec,seconds = 0 


let foodBtn = document.querySelector("#food")
let moneyBtn = document.querySelector("#money")
let toyBtn = document.querySelector("#toy")
const startBtn = document.querySelector("#start-button")
const hideIntroBtn = document.querySelector('#hide-intro')
const resetBtn = document.querySelector("#reset-button")
let messageEl = document.querySelector("#askForNeeds")
const countdownEl = document.querySelector("#countdown")
let rules = document.querySelector('#intro')
let introBox = document.querySelector('#intro-box')
let mainChar = document.querySelector('#main-char')
let gameLogo = document.querySelector('#intro-logo')
const happinessBar = document.querySelectorAll('.progress-bar')
const theBar = document.querySelector('.progress')
let youWin = document.querySelector('#you-win')
let youLose = document.querySelector('#you-lose')
let goblinSong = new Audio('../audio/game-goblin-song.mp3')


foodBtn.addEventListener('click', handleClick)
moneyBtn.addEventListener('click', handleClick)
toyBtn.addEventListener('click', handleClick)
hideIntroBtn.addEventListener('click', hideIntro)
startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetGame)

// fade in intro page upon opening 
rules.className= 'animate__animated animate__fadeInDown'
introBox.className='animate__animated animate__fadeInDown'
gameLogo.className='animate__animated animate__fadeInDown'
hideIntroBtn.className='animate__animated animate__fadeIn'

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
  goblinSong.currentTime = 0
  goblinSong.volume= .15
  goblinSong.play()
  setTimer()
}

function hideIntro() {
  foodBtn.removeAttribute('hidden')
  foodBtn.className='animate__animated animate__fadeInUp'
  moneyBtn.removeAttribute('hidden')
  moneyBtn.className='animate__animated animate__fadeInUp'
  toyBtn.removeAttribute('hidden')
  toyBtn.className='animate__animated animate__fadeInUp'
  startBtn.removeAttribute('hidden')
  messageEl.removeAttribute('hidden')
  mainChar.removeAttribute('hidden')
  countdownEl.removeAttribute('hidden')
  hideIntroBtn.setAttribute('hidden', true)
  rules.setAttribute('hidden', true)
  introBox.setAttribute('hidden', true)
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
    goblinSong.pause()
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
    startBtn.setAttribute('hidden', true)
    donePlaying = true
    goblinSong.pause()
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

