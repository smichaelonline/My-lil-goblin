/* Pseudo-code: 
1. Define the variable that will track the state of the game: winner (win or lose are the only options)
2. Cached elements: 
  Message element: shows messages of the goblins mood
  Countdown: stores the timer and countdown 
3. Initialize the game with init function: 
  Call init function 
  set winner to null 
  timer 
  call render function at the end 
4. Render the game with render function: 
  Render a message based on what is happening in the game (winner: You won! / loser: you lost!)
  render timer 
  progress bar 
! Functions needed: 
  -countdown function 
  -Event listeners:
    handle click for start button (intro screen)
    handle click for each of the goblins needs (food, toys, gold) to deliver the need to the goblin
  -scoring function: each of the needs will have an assigned point value -when added together will reach the min number needed to win 
  -getWinner function - display message + confetti (if...else...)

  5. Reset button function - create an event listener for the reset button  that will call init function 

  *Styling notes:
  - to add audio: fantasy music (very low volume)
  - light/dark mode - if there is time! 
  - Intro page: Drop in with the logo -> animate.css 
    fade out instructions when player presses start 


*/ 

/*-------------------------------- Constants --------------------------------*/




/*---------------------------- Variables (state) ----------------------------*/




/*------------------------ Cached Element References ------------------------*/




/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/