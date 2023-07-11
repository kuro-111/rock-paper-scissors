/* goal: Make js program that does random rock, paper, scissors.

Needs the ff:
   Randomly generated input from computer and result
   Input from user
   3 rounds of game before resetting.
   Needs to display result

 Steps:  
  Work on user input first
  Make random generated input
  Set conditions for result
  Set how many rounds of game
  Print result and make reset button

  User Input:
    Create variable for user input;
    Get input from user;
    Display input;

    */

   
   
   
    //user input 
    
   
    //random input
    /**
     * Function to randomly select 'ROCK, PAPER, SCISSORS'
     * 
     * @returns {String} - Returns the randomly selected string.
     */
    function getComputerChoice() {
      const rps = ["ROCK", "PAPER", "SCISSORS"];

    
      const random = Math.floor(Math.random()*rps.length);
      return (rps[random]);
    }


    

    function round(playerChoice, randomComputerChoice) {

      let lose = "You lose! "+randomComputerChoice+" beats "+playerChoice+" :(";
      let win = "YOU WIN! "+playerChoice+" beats "+randomComputerChoice+" :DD";

    if (randomComputerChoice==playerChoice) {
      return("IT'S A TIE!")
    }
    else if ((randomComputerChoice=="ROCK") && (playerChoice=="SCISSORS")) {
      return(lose)
    }
    else if ((randomComputerChoice=="SCISSORS") && (playerChoice=="PAPER")) {
      return (lose)
    }
    else if ((randomComputerChoice=="PAPER") && (playerChoice=="ROCK")){
      return(lose)
    }
    else {
      return(win)
    }
    }

    // Game function: Use playRound() to play a 5 game round that keeps score and reports a winner or loser at the end.
    /*function game() {
  
        let playerScore = 0;
        let computerScore = 0;

            //for (i=0; i<5; i++) {

              let newPlayerSelection = uIn();
            
              if (newPlayerSelection == "THAT'S AN ILLEGAL MOVE!") {
                return ("THAT'S AN ILLEGAL MOVE!");
              }

              let newComputerSelection = getComputerChoice();
             
              let playResult = round(newPlayerSelection,newComputerSelection);

              console.log(playResult);

            if (playResult=="YOU WIN! "+newPlayerSelection+" beats "+newComputerSelection+" :DD") {
             playerScore++;
            }
            else if(playResult=="You lose! "+newComputerSelection+" beats "+newPlayerSelection+" :(") {
             computerScore++;
            }
            
           
            
            //}

            console.log(playerScore)

          
          if (playerScore>computerScore) {
            return "Ultimate winner woohoo!!!";
          }
          else if (playerScore==computerScore) {
            return "Ultimate tie!!! :00";
          }
          else {
            return "You loser :)";
          }
        // Compare player score to computer score, decide a winner
        // Return the result of the game
    }

    console.log(game());
    */

    

    
      //Add designs and/or other functions


    //function for Player input, random computer choice and game round
    function clickButton (event) {
      const playerChoice = event.currentTarget.attributes['data-key'].value
      console.log(event);
      let randomComputerChoice = getComputerChoice();
      let playRound = round(playerChoice, randomComputerChoice);
      console.log(playerChoice, randomComputerChoice, playRound);
    //element to select the player Score for on HTML
    //select omputer score and round next
    //make Scores element change to tally scores
      let playerScore = document.querySelector(`h3.PS`)
    }
    
    

    //Event listeners for the buttons

    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    buttons.forEach(button => button.addEventListener('click', clickButton));




    
    


    

      

  

    



    
