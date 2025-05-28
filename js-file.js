const ul = document.querySelector("ul");

const input = document.querySelector("#item");

const addItem = document.querySelector("#addItem");

function createElements(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btnDelete = document.createElement("button");

    span.textContent = text;
    btnDelete.textContent = "Delete";

    li.append(span,btnDelete);

  return {li , btnDelete}
}

function deleteLiElement(btnDelete, li) {
    btnDelete.addEventListener("click", () => {
        ul.removeChild(li)
      })
}

addItem.addEventListener("click", () =>{
    let inputText = input.value;
    inputText.trim();
    //alert(inputText)
        
    const {li, btnDelete} = createElements(inputText)
    deleteLiElement(btnDelete,li)
    
    ul.appendChild(li)
    
    input.value = '';
    input.focus()
})