let humanScore = 0;
let computerScore = 0;

let button = document.querySelectorAll(".option")
let resultMessage = document.querySelector(".resultMessage");
let humanPoints = document.querySelector(".humanResult")
let computerPoints = document.querySelector(".computerResult")


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
        humanPoints.textContent = humanScore;
    }
    else if (humanChoice == 2 && computerChoice == 1) {
        humanScore++;
        resultMessage.textContent = "You win! Paper beats rock.";
        humanPoints.textContent = humanScore;
    }
    else if (humanChoice == 3 && computerChoice == 2) {
        humanScore++;
        resultMessage.textContent = "You win! Scissors beats paper";
        humanPoints.textContent = humanScore;
    }

    // COMPUTER WIN
    else if (computerChoice == 1 && humanChoice == 3) {
        computerScore++;
        resultMessage.textContent = "You Lose! Rock beats scissors.";
        computerPoints.textContent = computerScore;
    }
    else if (computerChoice == 2 && humanChoice == 1) {
        computerScore++;
        resultMessage.textContent = "You Lose! Paper beats rock.";
        computerPoints.textContent = computerScore;
    }
    else if (computerChoice == 3 && humanChoice == 2) {
        computerScore++;
        resultMessage.textContent = "You Lose! Scissors beats paper";
        computerPoints.textContent = computerScore;
    }
    else {
        return;
    }
}

function buttonDisable() {
    button.forEach(button => button.disabled = true);
}

button.forEach(button => {
    button.addEventListener("click", (event) => {
        const choiceId = event.target.id;
        const humanOption = getHumanChoice(choiceId);
        playRound(humanOption, getComputerChoice());

        if (humanScore == 5) {
            resultMessage.textContent = "Congratulations, you win!";
            buttonDisable();
        }
        else if (computerScore == 5) {
            resultMessage.textContent = "You lost!";
            buttonDisable();
        }
    });
})
