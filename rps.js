let userScore = 0;
let compScore = 0;
let counter = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#myScore");
const compScorePara = document.querySelector("#compScore");
const count = document.querySelector("#count");

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const Rindex = Math.floor(Math.random() * 3);
    return options[Rindex];
}

const drawGame = () => {
    msg.innerText = "Game was Draw ! Play again !";
    msg.style.backgroundColor = "#219EBC";
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        counter++;
        count.innerText = counter;
        const userChoice = choice.getAttribute("id");
        game(userChoice);
    });
});

const game = (userChoice) => {
    //console.log("user choice", userChoice);
    const compChoice = gencompChoice();
    //console.log("computer choice", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#023047";
        msg.style.color = "white"
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer won ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#FB8500";
    }
};