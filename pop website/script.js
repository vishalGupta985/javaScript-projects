const openPopUp = document.querySelector(".open-popup")
const popupContent = document.querySelector(".pop-up")
const openBtn = document.querySelector(".button-container")
const closeIcon = document.querySelector(".close-icon")

openPopUp.addEventListener(('click'), () =>{
    popupContent.classList.add('open')
    openBtn.classList.add('close')
})

closeIcon.addEventListener(('click'), () =>{
    popupContent.classList.remove('open')
    openBtn.classList.remove('close')
})