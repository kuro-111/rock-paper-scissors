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
    let computerScoreCount = 0;
    let playerScoreCount = 0;
    let roundCounter = 0;

    //function for Player input, random computer choice and game round
    function clickButton (event) {
      const playerChoice = event.currentTarget.attributes['data-key'].value
      console.log(event);
      let randomComputerChoice = getComputerChoice();
      let playRound = round(playerChoice, randomComputerChoice);
      console.log(playerChoice, randomComputerChoice, playRound);
      
      // Select the parent
      const parentPop = document.querySelector('.popopUp');

      // Select previous child
      const selectFirstChild = document.querySelector('.oldChild');

      // If old child exists, remove it.
      if (selectFirstChild) {
        // Remove previous child
        const removeChild = parentPop.removeChild(selectFirstChild);
      }
      
      // Creating a child element
      const popUp = document.createElement('div');
      
      // Fill the child with stuff
      popUp.textContent = `${playRound}`;

      // Appending the child to the parent
      parentPop.appendChild(popUp);

      popUp.classList.add('oldChild');
      
      
      //select Score element from HTML
      let playerScore = document.querySelector(`h3.PS`);
      let computerScore =document.querySelector(`h3.CS`);
      let roundCount = document.querySelector(`h3.RND`);
      
      if (playRound == "You lose! "+randomComputerChoice+" beats "+playerChoice+" :(") {
        //Tally score for when computer wins
        computerScoreCount++;
        computerScore.textContent = `Computer Score: ${computerScoreCount}`;
        roundCounter++;
        roundCount.textContent = `Round: ${roundCounter}`;
        }
        
        else if (playRound == "YOU WIN! "+playerChoice+" beats "+randomComputerChoice+" :DD") {
          playerScoreCount++;
          playerScore.textContent = `Player Score: ${playerScoreCount}`;
          roundCounter++;
          roundCount.textContent = `Round: ${roundCounter}`;
        }

        else if (playRound == "IT'S A TIE!") {
          playerScore.textContent = `Player Score: ${playerScoreCount}`;
          computerScore.textContent = `Computer Score: ${computerScoreCount}`;
          roundCounter++;
          roundCount.textContent = `Round: ${roundCounter}`;
        }
        
        
        
        //Stops game after 5th round and decides winner 
        


        if (roundCounter == 5) {
          function winlose (){
            const winner ="YOU'RE THE ULTIMATE WINNER!! WOOHOOO!!"
            const loser ="YOU'RE THE ULTIMATE LOSER!! :d"
            const tie ="ULTIMATE TIE!!! :00"
            
            if (playerScoreCount>computerScoreCount) {
              
              return winner;
            }
            else if(playerScoreCount<computerScoreCount) {
              
              return loser;
            }
            else if(playerScoreCount==computerScoreCount) {
              
              return tie;
            }
          }  
          
          const callWinLose = winlose();
          
          //display if player won or not after game ends 
          
          
          //select parent node 
          const endParentPop = document.querySelector('.endPop');
          //create child
          const endPoppy = document.createElement('div');
          //put text inside  
          endPoppy.textContent = `${callWinLose}`;
          
          endParentPop.appendChild(endPoppy);
          return callWinLose;
        }

        
      



        
      }
      
    

    //Event listeners for the buttons

    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    buttons.forEach(button => button.addEventListener('click', clickButton));




    
    


    

      

  

    



    
