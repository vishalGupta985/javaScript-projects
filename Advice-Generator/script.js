const button = document.querySelector("button");
const adviceNo = document.querySelector('.advice-no')
const advicenoText = document.querySelector('#advice-no')
const adviceText = document.querySelector('.advice')


async function fetchdata() {
    const url = `https://api.adviceslip.com/advice`;
    adviceNo.classList.add('active');
    try {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

const displayData = (data) =>{
    advicenoText.innerText = data.slip.id;
    adviceText.innerText = data.slip.advice
}

button.addEventListener('click',() =>{
    fetchdata();
})
