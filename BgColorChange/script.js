const button = document.querySelectorAll('.box');
const body = document.querySelector('body');

button.forEach( (button)=> {
    console.log(button);
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);

        if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            // body.style.color = 'white';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
    
});