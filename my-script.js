const rock = "rock";
const paper = "paper";
const scissors = "scissors";


function getComputerChoice () {
    if (Math.floor(Math.random() * 3 + 1) === 1) {
        return rock;
    } else if (Math.floor(Math.random() * 3 + 1) === 2) {
        return paper;
    } else {
        return scissors;
    }
}

// function getHumanChoice () {
//     let choice = prompt("Choose Rock, Paper, or Scissors.");
//     if (choice == "Rock" || choice == "rock") {
//         return rock;
//     } else if (choice == "Paper" || choice == "paper") {
//         return paper;
//     } else if (choice == "Scissor" 
//         || choice == "scissor" 
//         || choice == "scissors"
//         || choice == "Scissors") {
//         return scissors;
//     }


// }


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let resultMessage = ""

    if (humanChoice === rock 
        && computerChoice === paper){
        computerScore += 1;
        resultMessage = "You lose! Paper beats Rock.";
       
    } else if (humanChoice === rock && computerChoice === scissors){
        humanScore += 1;
       resultMessage = "You Win! Rock beats Scissor.";
       
    } else if (humanChoice === rock && computerChoice === rock){
    resultMessage = "Both chose rock.";
  

    } else if (humanChoice === paper && computerChoice === scissors){
        computerScore += 1;
        resultMessage = "You lose! Scissor beats Paper.";
        
    } else if (humanChoice === paper && computerChoice === rock){
        humanScore += 1;
       resultMessage = "You Win! Paper beats Rock.";
       
    } else if (humanChoice === paper && computerChoice === paper){
    resultMessage = "Both chose Paper.";
    

    } else if (humanChoice === scissors && computerChoice === rock){
        computerScore += 1;
        resultMessage = "You lose! Rock beats Scissor.";
       
    } else if (humanChoice === scissors && computerChoice === paper){
        humanScore += 1;
        resultMessage = "You Win! Scissor beats Paper.";
       
    } else if (humanChoice === scissors && computerChoice === scissors){
   resultMessage = "Both chose Scissor.";
    
    }

return resultMessage;
// alert(`Human: ${humanScore}\nMachine: ${computerScore}`)

}




// function playGame() {
        
//     playRound (getHumanChoice(), getComputerChoice());
//     playRound (getHumanChoice(), getComputerChoice());
//     playRound (getHumanChoice(), getComputerChoice());
//     playRound (getHumanChoice(), getComputerChoice());
//     playRound (getHumanChoice(), getComputerChoice());

   
//    if (humanScore < computerScore) {
//     alert ("You Lose!");
//    } else if (humanScore > computerScore) {
//     alert ("You Win");
//    } else {
//     alert ("You Tied!");
//    }

// }


// playGame()


const buttons = document.querySelectorAll("button");



buttons.forEach((button) => {
    button.addEventListener ("click", () => {
        const humanChoice = button.id;

        const message = playRound (humanChoice, getComputerChoice());
    
        const tScore = document.querySelector("#totalScore");
        
        
        tScore.textContent = `Player: ${humanScore} - Machine: ${computerScore}`

                
        const round = document.createElement("li");
        
        round.textContent = message;

        const list = document.querySelector("ul");

        list.appendChild(round);

        
        const finalScore = document.querySelector("#finalScore");
        
        if (humanScore === 5) {

            finalScore.textContent = "You Win";

        } else if (computerScore === 5){

            finalScore.textContent = "You Lose";

                  

        };

        if (humanScore === 5 || computerScore === 5) {

            buttons.forEach((button) => {
                button.disabled = true;
            });  


            const reset = document.querySelector("#reset");

            const newGame = document.createElement("h2");
            newGame.textContent = "New Match?";
            reset.appendChild(newGame);

            const resetButton = document.createElement("button");
            resetButton.textContent = "YES!";

            reset.appendChild(resetButton);


            resetButton.addEventListener ("click", () => {

                humanScore = 0;
                computerScore = 0;
                tScore.textContent = `Player: ${humanScore} - Machine: ${computerScore}`;
        finalScore.textContent = "";
                list.innerHTML = "";
                reset.innerHTML = "";
                buttons.forEach((button) => {
                    button.disabled = false;
                });



            });

            }


            

    
    });
});








