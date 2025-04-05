const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i<6; i++){
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interValId;
const startChangingColor = function (){
    if(!interValId){
        interValId = setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(interValId);
    interValId = null;
}

start.addEventListener("click",startChangingColor);
stop.addEventListener("click",stopChangingColor);
