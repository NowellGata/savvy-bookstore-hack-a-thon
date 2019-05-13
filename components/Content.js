import Book from "./Book"

function processBooks(books) {
  let booksHTML = "";
  
  books.forEach(book => {
    booksHTML += Book(book)
  })
  return booksHTML;
}

export default function(state) {
  return `
    <figure>
      ${processBooks(state.boox)}
    </figure>
  `
}