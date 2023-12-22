var bookmarkName = document.getElementById("bookmarkName")
var bookmarkUrl = document.getElementById("bookmarkURL")
var popup = document.getElementById('popupWindow')
var updateBtn = document.getElementById('updateBtn')
var submitBtn = document.getElementById('submitBtn')
var closeBtn = document.getElementById('closeBtn')

var booksIndex = 0 ;
var booksList = []


if(localStorage.getItem('booksStorage')){
    booksList = JSON.parse(localStorage.getItem('booksStorage'))
    displayBooks()
}

function getAddBooks() {
    var booksMark = {
        name : bookmarkName.value ,
        url : bookmarkUrl.value
    }
    if (validateBookmark(bookmarkName.value ,bookmarkUrl.value)){
        booksList.push(booksMark)
        localStorage.setItem('booksStorage' , JSON.stringify(booksList))
    }else{
        popup.style.setProperty('display', 'flex', 'important');
    }
    
    displayBooks()
    clearForm()
}

function closePopUp(){
    popup.style.setProperty('display', 'none', 'important');
}

function clearForm(){
    bookmarkName.value = '';
    bookmarkUrl.value = '';
}

function displayBooks() {
    var cartona = ``
    for (var i = 0 ; booksList.length > i ; i++) {
        cartona += `
        <tr>
            <td>${i+1}</td>
            <td>${booksList[i].name}</td>
            <td><button class="btn btn-success"><a href="${"https://"+booksList[i].url}" target="_blank" rel="noopener noreferrer">Visit</a></button></td>
            <td><button onclick="deleteItem(${i})" class="btn btn-danger">Delete</button></td>
            <td><button onclick="showUpdate(${i})" class="btn btn-warning">Update</button></td>
        </tr>
    `
    }
        document.getElementById("tableContent").innerHTML = cartona ;
}

function deleteItem(index) {

    booksList.splice(index,1)
    localStorage.setItem('booksStorage' , JSON.stringify(booksList))

    displayBooks()
}

function validateBookmark(name, url) {
    regexName = /[a-zA-Z^\w]{3,}$/;
    regexUrl = /www\.[a-zA-Z0-9^\w]+\.[a-zA-Z0-9^\w]+$/;

    var isNameValid = regexName.test(name);
    var isUrlValid = regexUrl.test(url);

    if (isNameValid) {
        bookmarkName.classList.replace('is-invalid', 'is-valid');
    } else {
        bookmarkName.classList.add('is-invalid');
    }

    if (isUrlValid) {
        bookmarkUrl.classList.replace('is-invalid', 'is-valid');
    } else {
        bookmarkUrl.classList.add('is-invalid');
    }

    return isNameValid && isUrlValid; 
}

function showUpdate(index) {
    booksIndex = index ;

    bookmarkName.value = booksList[index].name;
    bookmarkUrl.value = booksList[index].url;

    window.scrollTo(0 , 0)

    updateBtn.style.display = 'block' ;
    submitBtn.style.display = 'none' ;
}

function booksUpdate() {
    updateBtn.style.display = 'none' ;
    submitBtn.style.display = 'block' ;

    booksList[booksIndex].name = bookmarkName.value ;
    booksList[booksIndex].url = bookmarkUrl.value ;

    localStorage.setItem('booksStorage' , JSON.stringify(booksList))
    displayBooks()
}

function search (key){
    var cartona ='';
    for (var i = 0 ; i < booksList.length ; i++ ){
        if(booksList[i].name.toLowerCase().includes(key.toLowerCase())){
            cartona += `
                <tr>
                <td>${i+1}</td>
                <td>${booksList[i].name}</td>
                <td><button class="btn btn-success"><a href="${"https://"+booksList[i].url}" target="_blank" rel="noopener noreferrer">Visit</a></button></td>
                <td><button onclick="deleteItem(${i})" class="btn btn-danger">Delete</button></td>
                <td><button onclick="showUpdate(${i})" class="btn btn-warning">Update</button></td>
            </tr>
        `
        }
    }
    document.getElementById("tableContent").innerHTML = cartona ;
}





// function validateBookmark(name, url) {
//     regexName = /[a-zA-Z^\w]{3,}$/;
//     regexUrl = /www\.[a-zA-Z0-9^\w]+\.[a-zA-Z0-9^\w]+$/;

//     if (regexName.test(name)) {
//         bookmarkName.classList.replace('is-invalid', 'is-valid');
//     } else {
//         bookmarkName.classList.add('is-invalid');
//     }

//     if (regexUrl.test(url)) {
//         bookmarkUrl.classList.replace('is-invalid', 'is-valid');
//     } else {
//         bookmarkUrl.classList.add('is-invalid');
//     }
//     return regexName.test(name , url)
// }


// function validationName(name , url) {
//     regexName = /[a-zA-Z^\w]{3,}$/;


//     if (regexName.test(name)) {
//         bookmarkName.classList.replace('is-invalid', 'is-valid')
//     }else{
//         bookmarkName.classList.add('is-invalid')
//     }
// }
// function validationURL(url){
//     regexUrl = /www\.[a-zA-Z0-9^\w]+\.[a-zA-Z0-9^\w]+$/;
//     if (regexUrl.test(url)) {
//         bookmarkUrl.classList.replace('is-invalid', 'is-valid')
//     }else{
//         bookmarkUrl.classList.add('is-invalid')
//     }
// }


// var bookNameInput = document.getElementById("bookmarkName");
// var bookUrlInput = document.getElementById("bookmarkURL")
// var booksList = []
// if(localStorage.getItem("booksStorage") != null){
//     booksList = JSON.parse(localStorage.getItem("booksStorage"))
//     displayBooks()

// }
// function getAddBooks() {
//     var booksMark = {
//         name: bookNameInput.value ,
//         url: bookUrlInput.value ,
//     }
//     booksList.push(booksMark);
//     localStorage.setItem("booksStorage" , JSON.stringify(booksList))
//     displayBooks();
// }

// function displayBooks(){
//     var cartona =``;
//     for (var i=0;i<booksList.length ;i++){
//         cartona += `
//             <tr>
//                 <td>${i+1}</td>
//                 <td>${booksList[i].name}</td>
//                 <td><button class="btn btn-warning"><a href="${"https://"+booksList[i].url}" target="_blank" rel="noopener noreferrer">Visit</a></button></td>
//                 <td><button class="btn btn-danger">Delete</button></td>
//             </tr>
//         `
//     }
//     document.getElementById("tableContent").innerHTML = cartona ;
// }