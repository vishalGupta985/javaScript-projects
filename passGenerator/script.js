const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = '0123456789'
const symbolSet = '~!@#$%^&*()-_=+}}[{\|;:/?.>,<'

// selector
const passBox = document.querySelector("#pass-box")
const totalChar = document.querySelector("#total-char")
const lowerInput = document.getElementById("lower-case") 
const upperInput = document.getElementById("upper-case") 
const numberInput = document.getElementById("numbers") 
const symbolInput = document.getElementById("symbols") 

const getRandomData = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const passGenerate = (password = "") =>{
    if(upperInput.checked){
        password += getRandomData(uppercaseSet) 
    }
    if(lowerInput.checked){
        password += getRandomData(lowercaseSet) 
    }
    if(numberInput.checked){
        password += getRandomData(numberSet) 
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet) 
    }
    if(password.length < totalChar.value){
        return passGenerate(password)
    }
    console.log(truancateString(password, totalChar.value))
    passBox.innerText = truancateString(password, totalChar.value);
}

//passGenerate()

document.getElementById("btn").addEventListener('click', function(){
    passGenerate()
})

function truancateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num)
        return subStr
    }else{
        return str;
    }
    
}