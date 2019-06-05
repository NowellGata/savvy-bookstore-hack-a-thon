import Book from './Book';

function buildBooksHTML(state){
    return state.books.map((book) => `${Book(book)}`).join(' ');
}
export default (states) => `${buildBooksHTML(states)}`;
