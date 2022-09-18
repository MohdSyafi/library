let myLibrary = [new Book('naruto','skfdlsfjslfj','tite kubo',5,'read')];

function Book(title,summary,author,pages,status) {
  this.title = title,
  this.summary = summary,
  this.author = author,
  this.pages = pages,
  this.status = status
}

function closeDialog(){
    addDialog.style.display = 'none'
}

function openDialog(){
    if(addDialog.style.display === 'block')
        closeDialog();
    else
        addDialog.style.display = 'block'
}

function addBookToLibrary(form) {
    const newBook = new Book(
    form.elements['form-title'].value,
    form.elements['form-summary'].value,
    form.elements['form-author'].value,
    form.elements['form-pages'].value,
    form.elements['form-status'].value
   )
   var length = myLibrary.push(newBook);
   updateLibrary(length-1);
}

 function updateLibrary(newIndex){

    let card = document.querySelector('.cards:nth-child(2)');
    const clone = card.cloneNode(true);
    const newBook = myLibrary[newIndex];

    clone.querySelector("#title").textContent = newBook.title;
    clone.querySelector("#summary").textContent = newBook.summary;
    clone.querySelector("#author").textContent = newBook.author;
    clone.querySelector("#pages").textContent = newBook.pages;
    clone.querySelector("#status").textContent = newBook.status;
    
    let content = document.querySelector('.content');
    content.appendChild(clone);
 }

const addDialog = document.querySelector(".add-book-dialog");
addDialog.style.display = 'none';

const newButton = document.querySelector("div.add-cards");
newButton.addEventListener('click',openDialog);

const closeButton = document.querySelector(".close");
closeButton.addEventListener('click',closeDialog);

const submit = document.querySelector("form");

submit.addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary(submit);
});



