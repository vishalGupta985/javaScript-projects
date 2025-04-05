const startBtn = document.querySelector(".start-btn");
const ruleBox = document.querySelector(".rule-box");
const startQuiz = document.querySelector(".restart");
const exitQuiz = document.querySelector(".exit-quiz");
const quiBox = document.querySelector(".que-box");
const nextQue = document.querySelector(".next-que");
let option_text = document.querySelector(".option-list");
const timeCount = document.querySelector('.time-sec');
const timeLine = document.querySelector(".time_line");


startBtn.addEventListener('click',() =>{
    ruleBox.classList.add('active-rule-box');
})

exitQuiz.addEventListener('click', () =>{
    ruleBox.classList.remove('active-rule-box');
})

startQuiz.addEventListener('click',() =>{
    ruleBox.classList.remove('active-rule-box');
    quiBox.classList.add('active-QueBox');
    showQuestion(0);
    startTimer(15);
    startTimerLine(0);
})



let que_count = 0;
let counter;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const resultBox = document.querySelector(".result");
const restartQuiz = document.querySelector(".restart"); 
const quitQuiz = document.querySelector(".quet-quiz"); 
const newGame = document.querySelector(".new-game"); 

quitQuiz.addEventListener('click',() =>{
    window.location.reload();
})

newGame.addEventListener("click",() =>{
    ruleBox.classList.remove('active-rule-box');
    quiBox.classList.add('active-QueBox');
    resultBox.classList.remove("active-result")
    showQuestion(0);
    startTimer(15);
    startTimerLine(0);
})

// Goes on next question
nextQue.addEventListener('click',() =>{
    if(que_count < questions.length - 1){
        que_count++;
        showQuestion(que_count);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextQue.style.display = "none";
    }else{
        console.log("question completed");
        showResult()
    }
})

// Getting question from array

const showQuestion = (index) =>{
    let que_text = document.querySelector(".question");
    let queNumber = document.querySelector(".que-count");

    // Question Heading add dynamicly
    let que_tag =  '<h2>'+  questions[index].num + ". " + questions[index].question + '</h2>';
    que_text.innerHTML = que_tag;

    // Option add
    let option_tag = '<div class="option"><p>' + '</p></div>'
                     +'<div class="option"><p>' + '</p></div>'
                     +'<div class="option"><p>' + '</p></div>'
                     +'<div class="option"><p>' + '</p></div>';
    
    option_text.innerHTML = option_tag;

    // Getting every element and putting content
    let i = 0;
    option_text.querySelectorAll('.option').forEach((ele)=>{
        // console.log(ele.textContent = questions[index].options[i]);
        ele.textContent = questions[index].options[i];
        i++
    })

    // Page count add
    let queNumberTag = '<span>'+ questions[index].num + " of "+ questions.length +'</span> Questions';
    queNumber.innerHTML = queNumberTag
    // console.log(questions[index].options[0]);
    
    const option = option_text.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelect(this)");
    }
}

function optionSelect(answer){
    clearInterval(counter);
    clearInterval(counterLine);

    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_text.children.length;
    if(userAns == correctAns){
        userScore += 1;
        
        answer.classList.add('correct');
        const div = document.createElement('div');
        div.classList.add('icon', 'tick-icon');
        div.innerHTML = '<img src="./image/icons8-tick-24.png">'
        answer.appendChild(div);
    }else{
        answer.classList.add('incorrect');

        const div = document.createElement('div');
        div.classList.add('icon', 'cross-icon');
        div.innerHTML = '<img src="./image/icons8-cross-50.png" alt="">'
        answer.appendChild(div);

        // if answer is correct then automatically select correct answer;
        for (let i = 0; i < allOptions; i++) {
            if(option_text.children[i].textContent == correctAns){
                option_text.children[i].setAttribute("class", "option correct");

                // automatically select right answer
                const div = document.createElement('div');
                div.classList.add('icon', 'tick-icon');
                div.innerHTML = '<img src="./image/icons8-tick-24.png">'
                option_text.children[i].appendChild(div);
            }
        }
    }

    nextQue.style.display = "block";

    // once option selected disabled all options
    
    for (let i = 0; i < allOptions; i++) {
        option_text.children[i].classList.add('disabled');
    }
}

function showResult(){
    ruleBox.classList.remove('active-rule-box');
    quiBox.classList.remove('active-QueBox');
    resultBox.classList.add("active-result");
    const scoreText = resultBox.querySelector('.print-result');
    if(userScore < 3){
        let scoreTag = '<p>and sorry, you got <span>' + userScore + ' out of 5</span></p>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<p>and nice 😎, you got <span>' + userScore + ' out of 5</span></p>';
        scoreText.innerHTML = scoreTag;
    }
}


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 10){
            timeCount.textContent = "0" + time;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}


function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 529){
            clearInterval(counterLine);
        }
    }
}