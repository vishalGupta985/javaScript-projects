// const form = document.querySelector('form');

// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     const height = (document.querySelector('#height').value);
//     const weight = (document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if(height === "" || height < 0 || isNaN(height)){
//         results.innerHTML = `please give a valid height ${height}`;
//     }
//     if(weight === "" || weight < 0 || isNaN(weight)){
//         results.innerHTML = `please give a valid weight ${weight}`;
//     }

//     else{
//         const bmi = (weight / (height*height()/10000)).toFixed(2);

//         results.innerHTML = `<span>(bmi)</span>`;
//     }
// })

const form = document.querySelector("form");


form.addEventListener("submit", function(e){
    // console.log(e)
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const msg = document.querySelector("#msg")
    console.log(msg);

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight`;
    }
    else{
        const normalRange = 18.6;

        const bmiCalc = (weight / ( (height*height) /10000)).toFixed(2);
        results.innerHTML = `<span>${bmiCalc}</span>`;

        if(bmiCalc < normalRange){
            msg.innerHTML = `<p> You need to gain your Weight </p>`
        }
        else{
            msg.innerHTML = `<p> You are healthy </p>`
        }
    }
});

