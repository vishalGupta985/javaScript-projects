const item = document.getElementById("item")
const toDoBox = document.getElementById("to-do-box")

item.addEventListener('keyup', function(e) {
    // console.log(e);
    if(e.key == "Enter"){
        addTodo(this.value);
        this.value = "";
    }
})

const addTodo = (item) =>{
     const listItem = document.createElement("li")
     listItem.innerHTML = `
      ${item}
      <i class="fas fa-times"></i>
     `;
    //  console.log(listItem)

    listItem.addEventListener('click', () =>{
        listItem.classList.toggle("done")
    })

    listItem.querySelector("i").addEventListener('click', () =>{
        listItem.remove()
    })
     toDoBox.appendChild(listItem)
}