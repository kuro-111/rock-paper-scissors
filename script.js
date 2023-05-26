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

    

    function uIn() {

    let user = prompt("Rock, Paper, Scissors!");

    let display = user.toUpperCase();

    switch(true) {
      
      case display == "ROCK":
      case display == "SCISSORS":
      case display == "PAPER":
        return (display);
        
      default:
        return ("THAT'S AN ILLEGAL MOVE!");
        

    }

  }
   
    //random input

    
    function getComputerChoice() {
      const rps = ["ROCK", "PAPER", "SCISSORS"];

    
      const random = Math.floor(Math.random()*rps.length);
      return (rps[random]);
    }


    

    function round(playerSelection, computerSelection) {

      let lose = "You lose! "+computerSelection+" beats "+playerSelection+" :(";
      let win = "YOU WIN! "+playerSelection+" beats "+computerSelection+" :DD";

    if (computerSelection==playerSelection) {
      return("IT'S A TIE!")
    }
    else if ((computerSelection=="ROCK") && (playerSelection=="SCISSORS")) {
      return(lose)
    }
    else if ((computerSelection=="SCISSORS") && (playerSelection=="PAPER")) {
      return (lose)
    }
    else if ((computerSelection=="PAPER") && (playerSelection=="ROCK")){
      return(lose)
    }
    else {
      return(win)
    }
    }

    // Game function: Use playRound() to play a 5 game round that keeps score and reports a winner or loser at the end.
    function game() {
  
        let playerScore = 0;
        let computerScore = 0;


            for (i=0; i<5; i++) {

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
            
           
            
            }

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


    
    


    

      

  

    



    
