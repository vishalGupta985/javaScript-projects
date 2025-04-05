const inputNumber = document.querySelector('#number-input');
const submitBtn = document.getElementById("button");
const remainChance = document.querySelector("#remain-num");
const prevNumber = document.querySelector("#PrevGuess");
const winmsg = document.querySelector('.winnermsg');
const newGame = document.querySelector('.new-game');
const randomNumber = parseInt((Math.random() * 25) + 1);
// const randomNumber = 10;

let prevGuess = [];
let chance = 10;
submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    chance--;
    let guessNum = parseInt(inputNumber.value);
    prevGuess.push(guessNum);
    
    if (guessNum === randomNumber) {
       const msg = '<h2><span>congratulations,</span> you guess it right.</h2>';
       displayGuess(msg);
       endGame();
    }else{
        if (chance === 0) {
            const msg = '<h2><span>OH...,</span> you lose the game try again.</h2>';
            displayGuess(msg);
            endGame();
        }else{
            prevNumber.innerText = prevGuess;
            remainChance.innerText = chance;
            inputNumber.value = '';
        }
    }
})


function displayGuess(msg){
    winmsg.innerHTML = msg;
    prevNumber.innerText = prevGuess;
    remainChance.innerText = chance;
}

function endGame(){
    inputNumber.value = '';
    inputNumber.setAttribute("disabled", '');
    newGame.classList.add('active');
    submitBtn.style.display = "none";
}

newGame.addEventListener('click',function(e){
    location.reload()
})