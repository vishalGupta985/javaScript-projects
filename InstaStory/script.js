const arr = [
    {dp: "https://images.unsplash.com/photo-1730031582379-25dcd02f942c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "https://images.unsplash.com/photo-1724685324992-ec866fb31aa0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1730055075810-4c7a4ac885a1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "https://images.unsplash.com/photo-1727293341907-5803c9874f10?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1727161131036-147165bd771c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "https://images.unsplash.com/photo-1615346341109-abdb359f4458?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];


const storyCollection = document.querySelector('.storyes')

let story = ''; 
arr.forEach((element, index) =>{
    // console.log(element);
    story  += `<div class="story">
                    <img id="${index}" src="${element.dp}" alt="">
            </div>`;
    
    storyCollection.innerHTML = story;
})


storyCollection.addEventListener('click',(e) =>{
    document.querySelector('.screen').style.display = "block";
    storyCollection.style.pointerEvents = "none";
    document.querySelector('.screen').style.backgroundImage = `url(${arr[e.target.id].url})`
    
    setTimeout(() =>{
        document.querySelector('.screen').style.display = "none";
        storyCollection.style.pointerEvents = "auto";
    },3000)

    let grow = 0;
    setInterval(() => {
        if(grow < 100){
            document.querySelector("#growth").style.width = `${grow}%`;
            grow++;
        }else{
            grow = 0;
        }
    }, 30);

})

document.querySelector("body").addEventListener('click',() =>{
    grow = 0;
    document.querySelector('.screen').style.display = "none";
    storyCollection.style.pointerEvents = "auto";
},true)