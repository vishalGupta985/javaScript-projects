const slider = document.querySelectorAll(".slider");
const prev= document.querySelector(".prev")
const next= document.querySelector(".next")
var counter = 0;

slider.forEach(
    (slide,index) =>{
        slide.style.left = `${index * 100}%`
    }
)

const imageChange = () =>{
    slider.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

prev.addEventListener('click',
     () => {
        counter ++;
        imageChange()
     })
next.addEventListener('click',
     () => {
        counter --;
        imageChange()
     })