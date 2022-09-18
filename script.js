let myLibrary = 
[
    new Book
    (
        'Monster Hunter',
        'You hunt monster. You wear their skins. Rinse and repeat. The coolest weapon in the game is the boomstick. You hold a lance that can shoot like a gun. Isnt that awesome.',
        'tite kubo',
        5,
        'read'
    )
    ,new Book
    (
        'Nier Automata',
        'You are an android in a dystopian world fighting murder hobo robots thingy majiggy. There is a lot of metaphors that normal wet brain people might find hard to understand.',
        'Yoko Taro',
        12,
        'unread'
    )
];

function Book(title,summary,author,pages,status) {
  this.title = title,
  this.summary = summary,
  this.author = author,
  this.pages = pages,
  this.status = status,
  Book.prototype.updateStatus = function() {
    if(this.status==="read")
        this.status = "unread"
    else
        this.status = "read"
  }
}

function closeDialog(){
    addDialog.style.display = 'none'
    addDialogContainer.style.display = 'none'
}

function openDialog(){
    if(addDialog.style.display === 'block'){
        closeDialog();
    }     
    else{
        addDialog.style.display = 'block';
        addDialogContainer.style.display = 'block';
    }
        
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
   appendLibrary(length-1);
}

 function appendLibrary(newIndex){

    const newBook = myLibrary[newIndex];
    const newNode = createNode(newBook,newIndex);
    let content = document.querySelector('.content');
    content.appendChild(newNode);
 }

 function loadLibrary(){

    let content = document.querySelector('.content');

    if(myLibrary.length>0){    
        myLibrary.forEach((book,index)=>{
           const newNode = createNode(book,index);
           content.appendChild(newNode);
        });
    }
 }

 function createNode(book,bookIndex){
    let card = document.querySelector('.cards:nth-child(2)');
    const clone = card.cloneNode(true);
    const newId = "card" + `${bookIndex}`;
    clone.setAttribute('id',newId);
    clone.querySelector(`.bookTitle`).textContent = book.title;
    clone.querySelector(`.summary`).textContent = book.summary;
    clone.querySelector(`.author`).textContent = book.author;
    clone.querySelector(`.pages`).textContent = book.pages;
    clone.querySelector(`.status`).textContent = book.status;
    clone.querySelector(`.updateBtn`).setAttribute('data-index',bookIndex);
    clone.querySelector(`.updateBtn`).setAttribute('id',"updateBtn" + `${bookIndex}`);
    clone.querySelector(`.removeBtn`).setAttribute('data-index',bookIndex);
    clone.querySelector(`.removeBtn`).setAttribute('id',"removeBtn" + `${bookIndex}`);
    clone.setAttribute(`data-index`,bookIndex);

    return clone;
 }

 function updateBook(bookIndex){
    myLibrary[bookIndex].updateStatus();
    const updatedCard = document.querySelector(`div.cards[data-index="${bookIndex}"]`);
    updatedCard.querySelector(`.status`).textContent = myLibrary[bookIndex].status;
 }

const addDialog = document.querySelector(".add-book-dialog");
const addDialogContainer = document.querySelector(".dialogContainer");

closeDialog();

const newButton = document.querySelector("div.add-cards");
newButton.addEventListener('click',openDialog);

const closeButton = document.querySelector(".close");
closeButton.addEventListener('click',closeDialog);

const submit = document.querySelector("form");

submit.addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary(submit);
    closeDialog();
});

loadLibrary();

const updateButtons = document.querySelectorAll(".updateBtn");
updateButtons.forEach(item=>item.addEventListener('click',(e)=> updateBook(e.target.getAttribute('data-index'))));

