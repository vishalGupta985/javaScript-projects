const queBox = document.getElementById("que-box");
const allOptions = document.querySelectorAll("label");
const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");


const question = [
    {
        'que': 'Which of the following is the markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'HYPER TEXT MARKUP LANGUAGE',
        'b': 'CASCADING STYLE SHEET',
        'c': 'A & B BOTH',
        'd': 'NONE OF THERE',
        'correct': 'b'
    },
    {
        'que': 'What does HTML stand for?',
        'a': 'HYPER TEXT MARKUP LANGUAGE',
        'b': 'CASCADING STYLE SHEET',
        'c': 'A & B BOTH',
        'd': 'NONE OF THERE',
        'correct': 'a'
    },
    {
        'que': 'What was Javascript lounched?',
        'a': '1990',
        'b': '1991',
        'c': '1995',
        'd': 'NONE OF THESE',
        'correct': 'c'
    }
]

let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;

const loadQuestion = () =>{
    if(index === total){
        return endQuize();
    }
    reset();
    const data = question[index];
    // console.log(data);
    queBox.innerText = `${index + 1}. ${data.que}`;
    allOptions[0].innerText = data.a;
    allOptions[1].innerText = data.b; 
    allOptions[2].innerText = data.c; 
    allOptions[3].innerText = data.d; 
}


const submitQuize = () =>{
    const data = question[index];
    const ans = getAnswer();

    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();

    return;
}

const getAnswer = () =>{
    let answer;
    inputs.forEach((input) => {
        // console.log(input)
        if(input.checked){
           answer = input.value
        }
    });
    return answer;
}

const reset = () =>{
    inputs.forEach((input) =>{
        input.checked = false;
    })
}

const endQuize = () =>{
    document.querySelector(".box").innerHTML = `
    <h2>Thank you for the playing quize</h2>
    <h1>Correct ans: ${right}</h1> <br>
    <h1>Wrong ans: ${wrong}</h1>`
}

button.addEventListener("click",submitQuize)

loadQuestion();