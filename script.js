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
      case display == "SCISSOR":
      case display == "SCISSORS":
      case display == "PAPER":
        return (display);
        
      default:
        return ("THAT'S AN ILLEGAL MOVE!")
        

    }

  }
   
   let userAns = uIn();

   console.log(uIn());

    //random input

    
    function randAns() {
      const rps = ["ROCK", "PAPER", "SCISSORS"];

    
      const random = Math.floor(Math.random()*rps.length);
      return (rps[random]);
    }

    let select = randAns();

    console.log(select);

    let lose = "YOU LOSE :(";

    let win = "YOU WIN! :DD";


    if (select==userAns) {
      console.log("IT'S A TIE!")
    }
    else if (select=="ROCK">userAns=="SCISSORS") {
      console.log(lose)
    }
    else if (select=="SCISSORS">userAns=="PAPER") {
      console.log(lose)
    }
    else if (select=="PAPER">userAns=="ROCK"){
      console.log(lose)
    }
    else {
      console.log(win)
    }



    

      

  

    



    
