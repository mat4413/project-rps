const rock = "Rock";
const paper = "Paper";
const scissor = "Scissor";


function getComputerChoice () {
    if (Math.floor(Math.random() * 3 + 1) === 1) {
        return rock;
    } else if (Math.floor(Math.random() * 3 + 1) === 2) {
        return paper;
    } else {
        return scissor;
    }
}

function getHumanChoice () {
    let choice = prompt("Choose Rock, Paper, or Scissors.");
    if (choice == "Rock" || choice == "rock") {
        return rock;
    } else if (choice == "Paper" || choice == "paper") {
        return paper;
    } else if (choice == "Scissor" 
        || choice == "scissor" 
        || choice == "scissors"
        || choice == "Scissors") {
        return scissor;
    }


}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let resultMessage = ""

    if (humanChoice === rock && computerChoice === paper){
        computerScore += 1;
        resultMessage = "You lose! Paper beats Rock.";
       
    } else if (humanChoice === rock && computerChoice === scissor){
        humanScore += 1;
       resultMessage = "You Win! Rock beats Scissor.";
       
    } else if (humanChoice === rock && computerChoice === rock){
    resultMessage = "Both chose rock.";
  

    } else if (humanChoice === paper && computerChoice === scissor){
        computerScore += 1;
        resultMessage = "You lose! Scissor beats Paper.";
        
    } else if (humanChoice === paper && computerChoice === rock){
        humanScore += 1;
       resultMessage = "You Win! Paper beats Rock.";
       
    } else if (humanChoice === paper && computerChoice === paper){
    resultMessage = "Both chose Paper.";
    

    } else if (humanChoice === scissor && computerChoice === rock){
        computerScore += 1;
        resultMessage = "You lose! Rock beats Scissor.";
       
    } else if (humanChoice === scissor && computerChoice === paper){
        humanScore += 1;
        resultMessage = "You Win! Scissor beats Papper.";
       
    } else if (humanChoice === scissor && computerChoice === scissor){
   resultMessage = "Both chose Scissor.";
    
    }

alert(resultMessage);
alert(`Human: ${humanScore}\nMachine: ${computerScore}`)

}




function playGame() {
        
    playRound (getHumanChoice(), getComputerChoice());
    playRound (getHumanChoice(), getComputerChoice());
    playRound (getHumanChoice(), getComputerChoice());
    playRound (getHumanChoice(), getComputerChoice());
    playRound (getHumanChoice(), getComputerChoice());

   
   if (humanScore < computerScore) {
    alert ("You Lose!");
   } else if (humanScore > computerScore) {
    alert ("You Win");
   } else {
    alert ("You Tied!");
   }

}


playGame()









