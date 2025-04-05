const subHeading = document.querySelector('h3')

let gameSerq = [];
let userSerq= [];

let btns = ['btn-1', 'btn-2', 'btn-3', 'btn-4'];

let startGame = false;
let level = 0;

document.addEventListener('keypress',() =>{
    if(startGame == false){
        startGame = true;
        levelUp();
    }
})

const gameFlash = (randBtn) =>{
    randBtn.classList.add('gameFlase');
    setTimeout(() => {
        randBtn.classList.remove('gameFlase');
    }, 280);
}


const userFlash = (randBtn) =>{
    randBtn.classList.add('userFlase');
    setTimeout(() => {
        randBtn.classList.remove('userFlase');
    }, 280);
}

function levelUp() {
    userSerq = [];
    level++;
    subHeading.innerText = `Level ${level}`;

    // chosing random btn
    const randIndex = Math.floor(Math.random() * 4);
    const randId = btns[randIndex];
    gameSerq.push(randId);
    console.log(gameSerq);
    const randBtn = document.querySelector(`#${randId}`);
    gameFlash(randBtn);
}

function checkAns(idx){
    // const idx = level - 1;
    if(userSerq[idx] === gameSerq[idx]){
        if(userSerq.length === gameFlash.length){
            setTimeout(() => {
                levelUp();
            }, 1000);
        }
    }
    else{
        subHeading.innerHTML = `Game Over! <b>Your score was ${level}</b> <br /> press the any key to start again.`;
        resetGame();
    }
}

function resetGame(){
    startGame = false;
    userSerq = [];
    gameSerq = [];
}

function btnPress(){
   const btn = this;
   userFlash(btn);

   const randId = btn.getAttribute('id');
   userSerq.push(randId);
   checkAns(userSerq.length-1);
}

const allbtn = document.querySelectorAll('.button');
for (const btn of allbtn) {
    btn.addEventListener('click', btnPress)
}


