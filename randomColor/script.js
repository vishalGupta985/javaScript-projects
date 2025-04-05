const body = document.querySelector("body");
const button = document.querySelector("button")

const randomColor = ()=> {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6 ; i++){
        // randNumber = Math.floor(Math.random() * 16);
        // console.log(randNumber)
        color += hex[Math.floor(Math.random() * 16)];
        console.log(color);
    }
    return color;
}

const changeBgColor = () =>{
    body.style.backgroundColor = randomColor();
}


button.addEventListener("click", changeBgColor)