const  chatInput = document.querySelector("#chatInput");
const sendBtn = document.querySelector("#sendBtn");
const chatContainer = document.querySelector('.container');
const themeBtn = document.querySelector("#theme-btn");
// const body = document.querySelector("body");

let userText = null;
const API_KEY = "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"

// creating element
const createElement = (html, className) =>{
    const chatDiv = document.createElement('div');
    chatDiv.classList.add('chat', className);
    chatDiv.innerHTML = html;
    return chatDiv;
}

// chat response

const getChatResponse = async(incommingChatDiv) =>{
    const API_URL = 'https://api.openai.com/v1/completions';
    const pElement = document.createElement('p');


    // properties and data for api
    const requestOptions = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-instruct",
            prompt: userText,
            max_tokens: 2048,
            tempreture: 0,
            // n: 1,
            // stop: null,
        })
    }

    try {
      const response = await (await fetch(API_URL, requestOptions)).json(); 
    //   console.log(response);
    pElement.textContent = response.choices[0].text.trim();
      
    } catch (error) {
        console.log(error);
        
    }

    incommingChatDiv.querySelector(".typing-animation").remove();
    incommingChatDiv.querySelector(".chat-details").appendChild(pElement);
}

// copy button
const copyResponse = (copyBtn) =>{
    const responseTextElement = copyBtn.parentElement.querySelector("p");
    navigator.clipboard.writeText(responseTextElement.textContent);
    copyBtn.textContent = "done";
    setTimeout(() => copyBtn.textContent = "content copy", 1000);
}


// creating incoming element
const showAnimation = () =>{
    const html = `<div class="chat-content">
                <div class="chat-details">
                    <img src="./image/icons8-chatgpt-64.png" alt="chat-gpt icon">
                    <div class="typing-animation">
                        <div class="typing-dot" style="--delay: 0.2s"></div>
                        <div class="typing-dot" style="--delay: 0.3s"></div>
                        <div class="typing-dot" style="--delay: 0.4s"></div>
                    </div>
                </div>
                <span><i onclick="copyResponse(this)" class="ri-file-copy-line"></i></span>
            </div>`;

    const incommingChatDiv = createElement(html, "incoming");
    chatContainer.appendChild(incommingChatDiv);
    getChatResponse(incommingChatDiv);
}


const handleInput = () =>{
    userText = chatInput.value.trim();
    // console.log(userText);

    if(!userText) return;
    const html = `<div class="chat-content">
                <div class="chat-details">
                    <img src="./image/icons8-user-100.png" alt="user icon">
                    <p></p>
                </div>
            </div>`;

    const outgoingChatDiv = createElement(html, "outgoing");
    outgoingChatDiv.querySelector('p').textContent = userText;
    chatContainer.appendChild(outgoingChatDiv);

    // Incoming div creation
    setTimeout(showAnimation, 500);
}


sendBtn.addEventListener("click", handleInput);

themeBtn.addEventListener('click',() =>{
    document.body.classList.toggle("light-mode");
    document.body.classList.contains("light-mode") ? "dark-mode" : "light-mode";
})