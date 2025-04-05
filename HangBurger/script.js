const closeIcon = document.querySelector('.close-icon')
const heading = document.querySelector('.heading-link')
// const headingContainer = document.querySelector('.heading-link-container')
const kitBotton = document.querySelector('i')
const goToTop = document.querySelector(".top-button")

closeIcon.addEventListener('click',(e) =>{
    heading.classList.add('close-tab')
    kitBotton.classList.add('kit-show')
    kitBotton.classList.remove('kit-hide')
})
kitBotton.addEventListener('click',(e) =>{
    heading.classList.remove('close-tab')
    kitBotton.classList.remove('kit-show')
    kitBotton.classList.add('kit-hide')
})

// kitBotton.addEventListener('click', (e) =>{
//     heading.classList.remove('close-tab')
//     kitBotton.classList.remove('kit-show')
// })

// goToTop.addEventListener('click', () =>{
//     scrollTo(0, 0)
// })
