console.log(window)

document.addEventListener("DOMContentLoaded", () => {
    let xhr = new XMLHttpRequest ();
    xhr.open('GET', 'https://striveschool-api.herokuapp.com/books')
    xhr.send();

    xhr.onreadystatechange = function (){
        if (xhr.readyState ===4 && xhr.status === 200){
            let books = JSON.parse(xhr.responseText);
        console.log(books)}
        }
});