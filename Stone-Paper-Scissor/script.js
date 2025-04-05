let userScore= 0;
let comScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return option[randInd];
};

const drawGame = () => {
    console.log("game is draw");
    msg.innerText = "game was draw. play again .";
    msgContainer.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log(`You Win! your ${userChoice} beats ${compChoice}`);
        msg.innerText = "you win";
        msgContainer.style.backgroundColor = "green";
    }
    else{
        comScore++;
        compScorePara.innerText = comScore;
        console.log(`You loss! ${compChoice} beats your ${userChoice}`);
        msg.innerText = "you loss";
        msgContainer.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genComChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
