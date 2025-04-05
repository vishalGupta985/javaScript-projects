let TodoList = [];
displayItems();


function AddTodo()
{
    let inputElement = document.querySelector('#TodoInput');
    let TodoItem = inputElement.value;
    TodoList.push(TodoItem);
    inputElement.value='';


    displayItems();
    // console.log(TodoItem);
}

function displayItems() {
    let displayElement = document.querySelector('#TodoItems');
    displayElement.innerText = '';
    for(let i=0; i<TodoList.length; i++)
    {
        displayElement.innerText = displayElement;
        innerText + "\n" + TodoList[i];
    }
}