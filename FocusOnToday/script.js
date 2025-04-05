const allCheckBox = document.querySelectorAll(".custom-checkbox");
const allInput = document.querySelectorAll(".option-input");
const eroor = document.querySelector(".choice-alert");
const progressBar = document.querySelector(".progress-bar")
const progressValue = document.querySelector(".progress-value")

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {}
let completeGoalCount = Object.values(allGoals).filter((goal) => goal.complete).length 

allCheckBox.forEach((checkbox) =>{
    
    checkbox.addEventListener('click', (e) =>{
        const allInputFilled = [...allInput].every(function(input){
            return input.value
        })
    if(allInputFilled){
        checkbox.parentElement.classList.toggle('complete')
        progressValue.style.width = '33.33%';
        progressValue.style.padding = '1rem';
        const inputId = checkbox.nextElementSibling.id
        allGoals[inputId].complete = !allGoals[inputId].complete
        let completeGoalCount = Object.values(allGoals).filter((goal) => goal.complete).length 
        // localStorage.setItem('allGoals', json.stringify(allGoals))
    }
    else{
        progressBar.classList.add("show-error")
    }        
})
})

allInput.forEach((input) =>{
    
    input.value = allGoals[input.id].name

    // if(allGoals[input.id].complete){
    //     console.log(input.parentElement.classList);
    //     input.parentElement.classList("complete");
    // }
    
    input.addEventListener('focus', () =>{
        progressBar.classList.remove("show-error")
    })
    
    input.addEventListener('input', (e) =>{
        
        allGoals[input.id] = {
            name: input.value,
            complete: false,
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
})