const rect = document.querySelector("#center")

rect.addEventListener("mousemove", (detail) =>{
    // console.log(rect.getBoundingClientRect());
    // console.log(detail);
    // console.log(Math.floor(detail.clientX - rectagleLocation.left));
    let rectagleLocation = rect.getBoundingClientRect();
    let insideRectVal = Math.floor(detail.clientX - rectagleLocation.left);

    if(insideRectVal < rectagleLocation.width/2){
        console.log("left");
    }
    else{
        console.log("right");
    }
})