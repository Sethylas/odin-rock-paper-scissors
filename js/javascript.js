let humanScore = 0;
let computerScore = 0;

const button = document.querySelectorAll(".option")
let resultMessage = document.querySelector(".resultMessage");


function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * (4 - 1) + 1);
    return computerSelection;
}

function getHumanChoice(choice) {
    let humanSelection = choice.toUpperCase();

    switch (humanSelection) 
    {
        case 'ROCK':
            humanSelection = 1;
            break;
        case 'PAPER':
            humanSelection = 2;
            break;
        case 'SCISSORS':
            humanSelection = 3;
            break;
        default:
            humanSelection = 0;
            break;
    }
    return humanSelection;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        resultMessage.textContent = "Tie!";
    }

    // PLAYER WIN
    else if (humanChoice == 1 && computerChoice == 3) {
        humanScore++;
        resultMessage.textContent = "You win! Rock beats scissors.";
    }
    else if (humanChoice == 2 && computerChoice == 1) {
        humanScore++;
        resultMessage.textContent = "You win! Paper beats rock.";
    }
    else if (humanChoice == 3 && computerChoice == 2) {
        humanScore++;
        resultMessage.textContent = "You win! Scissors beats paper";
    }

    // COMPUTER WIN
    else if (computerChoice == 1 && humanChoice == 3) {
        computerScore++;
        resultMessage.textContent = "You Lose! Rock beats scissors.";
    }
    else if (computerChoice == 2 && humanChoice == 1) {
        computerScore++;
        resultMessage.textContent = "You Lose! Paper beats rock.";
    }
    else if (computerChoice == 3 && humanChoice == 2) {
        computerScore++;
        resultMessage.textContent = "You Lose! Scissors beats paper";
    }
    else {
        return;
    }
}

function playGame() {
    while(humanScore != 5 && computerScore != 5) 
    {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore == 5) {
        console.log("Congratulations, you win!");
    }
    else {
        console.log("You lost!");
    }

}

button.forEach(button => {
    button.addEventListener("click", (event) => {
        const choiceId = event.target.id;
        const humanOption = getHumanChoice(choiceId);
        playRound(humanOption, getComputerChoice());
    });
})






