function fetchBooks() {

  const fetcher = fetch('https://anapioficeandfire.com/api/books')
  // using fetch to literally fetch data from the game of thrones api 
  .then(resp => resp.json())
  // taking our response and converting it to json
  .then(json => renderBooks(json));
  //  taking our json response and passing it to the renderBooks() function passing in the json as an argument
return fetcher;
// return the fetch promise

// OR 
  // return fetch('https://anapioficeandfire.com/api/books')
  // .then(resp => resp.json())
  // .then(json => renderBooks(json));


}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
