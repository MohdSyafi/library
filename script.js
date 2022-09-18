let myLibrary = [];

function Book() {
  // the constructor...
}

function closeDialog(){
    addDialog.style.display = 'none'
}

function addBookToLibrary() {
    if(addDialog.style.display === 'block')
        closeDialog();
    else
        addDialog.style.display = 'block'

}

const addDialog = document.querySelector(".add-book-dialog");
addDialog.style.display = 'none';

const newButton = document.querySelector("div.add-cards");
newButton.addEventListener('click',addBookToLibrary);

const closeButton = document.querySelector(".close");
closeButton.addEventListener('click',closeDialog);