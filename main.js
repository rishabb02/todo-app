// create global variables of html elements to be used anywhere in this file
const addBtn = document.querySelector(".add-btn")
const input = document.querySelector(".new-item")
const ul = document.querySelector(".todo-list")

// helper functions to be used after they are defined!
const addNewItem = (newItemText) => {
    let newItem = document.createElement("li")
    newItem.innerHTML = `
    <span>${newItemText}</span>
    <button class="delete">DEL</button>
    `
    ul.appendChild(newItem)

}

// add an event listener to the add button
addBtn.addEventListener("click", () => {
    addNewItem(input.value)
})

