import Book from './Book';

function buildBooksHTML(state){
    return state.books.map((book) => `<figure>${Book(book)}</figure>`).join(' ');
}
export default (states) => `${buildBooksHTML(states)}`;
