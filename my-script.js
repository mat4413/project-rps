const rock = "Rock";
const paper = "Paper";
const scissor = "Scissor";


function getComputerChoice () {
    if (Math.floor(Math.random() * 3 + 1) == 1) {
        return rock;
    } else if (Math.floor(Math.random() * 3 + 1) == 2) {
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
    } else {
        return scissor;
    }

}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanSelection === rock && computerSelection === paper){
        computerScore += 1;
        alert("You lose! Paper beats Rock.");
        alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);
    } else if (humanSelection === rock && computerSelection === scissor){
        humanScore += 1;
        alert("You Win! Rock beats Scissor.");
        alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);
    } else if (humanSelection === rock && computerSelection === rock){
    alert("Both chose rock, play again.");
    alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);

    } else if (humanSelection === paper && computerSelection === scissor){
        computerScore += 1;
        alert("You lose! Scissor beats Paper.");
        alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);
    } else if (humanSelection === paper && computerSelection === rock){
        humanScore += 1;
        alert("You Win! Paper beats Rock.");
        alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);
    } else if (humanSelection === paper && computerSelection === paper){
    alert("Both chose Paper, play again.");
    alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);

    } else if (humanSelection === scissor && computerSelection === rock){
        computerScore += 1;
        alert("You lose! Rock beats Scissor.");
        alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);
    } else if (humanSelection === scissor && computerSelection === paper){
        humanScore += 1;
        alert("You Win! Scissor beats Papper.");
        alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);
    } else if (humanSelection === scissor && computerSelection === scissor){
    alert("Both chose Scissor, play again.");
    alert(`Human: ${humanScore}\n
Machine: ${computerScore}`);
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));