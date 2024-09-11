const options = ["rock","paper","scissors"];

humanScore = 0;
computerScore = 0;


function getComputerChoice(){
     return options[Math.floor(Math.random() * options.length)];
    
}

function getHumanChoice(){
  let humanChoice = prompt("Write your choice(Rock,Paper or Scissors)");
  return humanChoice.toLowerCase();
  
}


   function playRound(humanChoice,computerChoice)  {

        if(humanChoice === "rock" && computerChoice === "rock"){
            console.log("Draw! Rock vs Rock");
            humanScore++;
            computerScore++;
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! rock beats scissors");
            humanScore++;
        }
        else if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose! paper beats rock");
            computerScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! scissors beats paper")
            computerScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats Rock")
            humanScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("Draw! paper vs paper");
            humanScore++;
            computerScore++;
        }
        else if(humanChoice === "scissors" && computerChoice === "scissors"){
            console.log("Draw! scissors vs scissors");
            humanScore++;
            computerScore++;
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose! rock beats scissors");
            computerScore++;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! scissors beats rock");
            humanScore++;
        }
        else{
            alert("Not valid please try again");
        }
    }

let game = () => {
for(let i = 0; i<5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    
    
}
}

function results () {

    if(humanScore>computerScore){
        console.log(`You win, you are genius ${humanScore} : ${computerScore}`);
    }
        else if(humanScore === computerScore){
           console.log(`Draw !!! ${humanScore}: ${computerScore}`);
        }  
        else {
            console.log(`You lose :( ${computerScore} : ${humanScore}`);
        }
} 

game();
results();










       

