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
        return ("THAT'S AN ILLEGAL MOVE!")
        

    }

  }
   
   let playerSelection = uIn();

   console.log(uIn());

    //random input

    
    function getComputerChoice() {
      const rps = ["ROCK", "PAPER", "SCISSORS"];

    
      const random = Math.floor(Math.random()*rps.length);
      return (rps[random]);
    }

    let computerSelection = getComputerChoice();

    console.log(computerSelection);

    

    

    function round(playerSelection, computerSelection) {

      let lose = "You lose! "+computerSelection+" beats "+playerSelection+" :(";
      let win = "YOU WIN! :DD";

    if (computerSelection==playerSelection) {
      console.log("IT'S A TIE!")
    }
    else if (computerSelection=="ROCK">playerSelection=="SCISSORS") {
      console.log(lose)
    }
    else if (computerSelection=="SCISSORS">playerSelection=="PAPER") {
      console.log(lose)
    }
    else if (computerSelection=="PAPER">playerSelection=="ROCK"){
      console.log(lose)
    }
    else {
      console.log(win)
    }
    }

    



    
    


    

      

  

    



    
