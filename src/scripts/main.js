const description = document.getElementById("description")
const btnAdd = document.getElementById("btn-add")
const listWrapper = document.querySelector(".list__wrapper")
const listItem = document.querySelectorAll(".new-item")
let listCount = 0;

btnAdd.addEventListener('click', () => addItemList())
description.addEventListener('keydown', (key) => {
    if(key.keyCode === 13) {
        addItemList()
    }
})

function addItemList() {
    if(description.value !== '') {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = newItem(description.value, listCount)
        listWrapper.appendChild(newDiv)
        listCount += 1;
        
        description.value = ''
    } else {
        console.log('Enter text')
    }
}

function deleteList(number) {
    let getItem = document.getElementById(`itemList${number}`)
    getItem.remove()
}

function changeColor(number) {
    let getItem = document.getElementById(`itemList${number}`)
    getItem.classList.add('checked')
}