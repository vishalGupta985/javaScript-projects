let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector("#reset-btn");
let gameInfo = document.querySelector(".game-info");
// let msgContainer = document.querySelector(".msg-container");

let currentPlayer;
let gameGride;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function initGame(){
    currentPlayer = 'X';
    gameGride = ["","","","","","","","",""];
    // UI empty 
    boxes.forEach((box, index) =>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${currentPlayer}`
    })
    newGame.classList.add('hide')
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

// swap turn 
function swapTurn(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O'
    }else{
        currentPlayer = 'X'
    }

    gameInfo.innerText = `Current Player - ${currentPlayer}`
}


// game over function
function checkGameOver(){
    answer = ""

    winPattern.forEach((position) => {
        //all 3 boxes should be non-empty and exactly same in value
        if( (gameGride[position[0]] !== "" || gameGride[position[1]] !== "" || gameGride[position[2]] !== "") 
            && (gameGride[position[0]] === gameGride[position[1]] ) && (gameGride[position[1]] === gameGride[position[2]])) {

                //check if winner is X
                if(gameGride[position[0]] === "X") 
                    answer = "X";
                else {
                    answer = "O";
                } 

                 //disable pointer events
                 boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                //now we know X/O is a winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");

            }
    });

    if(answer !== ""){
        gameInfo.innerText = `Winner: ${answer}`
        newGame.classList.remove('hide')
        return
    }

    //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
    gameGride.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    //board is Filled, game is TIE
    if(fillCount === 9) {
        gameInfo.innerText = "Game Tied !";
        newGame.classList.remove('hide')
    }
}

function handleClick(index){
    if(gameGride[index] === ""){
        boxes[index].innerText = currentPlayer
        gameGride[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // change turn
        swapTurn()
        // check winner
        checkGameOver()
    }
}

boxes.forEach((box, index) =>{
    box.addEventListener(('click'), () =>{
        handleClick(index);
    })
})

newGame.addEventListener('click',initGame)



// boxes.forEach((box) => {
//     box.addEventListener("click", () =>{
//         if(turnO === true)
//         {
//             box.innerText = "O";
//             turnO = false;
//         }
//         else
//         {
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });

// const disabledbox = () =>{
//     for(let box of boxes)
//         {
//             box.disabled = true;
//         }
// }

// const showWinner = (winner) => {
//     msg.innerText = 'Congratulations, Winner is ${winner}';
//     msgContainer.classList.remove("hide");
//     disabledbox();
// }

// const checkWinner = () => {
//     for(let pattern of winPattern)
//     {
//         // console.log(pattern[0], pattern[1], pattern[2]);
//         // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if(pos1Val != "" && pos2Val != "" && pos2Val != "" ){
//             if(pos1Val === pos2Val && pos2Val === pos3Val){
//                 console.log("Winner", pos1Val);
//                 showWinner();
//             }
//         }
//     }
// }


// const boxes = document.querySelectorAll(".box");
// const resetBtn = document.querySelector("#reset-btn");

// let turnO = true;

// boxes.forEach( (box) => {
//     // console.log(box)

//     box.addEventListener("click", () =>{
//         console.log("Box was clicked")

//         if(turnO){
//             box.innerText = "O";
//             turnO = false;
//         }else{
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         // box.classList.add("disabled");
//     })
// })