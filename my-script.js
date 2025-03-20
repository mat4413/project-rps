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


console.log(getHumanChoice())