const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener('click', function(){
    addNote()
})


const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea")
    console.log(notes)
    const data = [];
    
    notes.forEach((note) =>{
        data.push(note.value)
    })
    if(data.length === 0){
        localStorage.removeItem("notes")
    }else{
     localStorage.setItem('notes', JSON.stringify(data))
    }
}
addNote = (text = "") =>{
    // element selection
    const main = document.querySelector("#main")
    
    // element creation
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note')
    
    noteDiv.innerHTML = `
    <div class="tool">
        <i class="fas fa-save" id="save"></i>
        <i class="fas fa-trash" id="trash"></i>
    </div>
    <textarea>${text}</textarea>
    `;

    // deleting notes
    noteDiv.querySelector("#trash")
    .addEventListener('click', () =>{
        noteDiv.remove()
        saveNotes()
    })

    // saving notes
    noteDiv.querySelector("#save")
    .addEventListener('click', () =>{
        saveNotes()
    })

    noteDiv.querySelector("textarea").addEventListener('focusout',
        function(){
            saveNotes()
        }
    )
    main.appendChild(noteDiv)
    saveNotes()

    // const toolDiv = document.createElement('div')
    // toolDiv.classList.add('tool')

    // const textArea = document.createElement("textarea")

    // // kit creation
    // const iTag1 = document.createElement('i')
    // iTag1.classList.add('fas')
    // iTag1.classList.add('fa-save')

    // const iTag2 = document.createElement('i')
    // iTag2.classList.add('fas')
    // iTag2.classList.add('fa-trash')



    // // adding element
    // main.appendChild(noteDiv)
    // noteDiv.appendChild(toolDiv)

    // toolDiv.appendChild(iTag1)
    // toolDiv.appendChild(iTag2)

    // noteDiv.appendChild(textArea)
    // console.log(main)
}

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem('notes'))
        console.log(lsNotes);
        if(lsNotes === null){

        }else{
            lsNotes.forEach((lsNote) =>{
                addNote(lsNote)
            })
        }
    }
)() 