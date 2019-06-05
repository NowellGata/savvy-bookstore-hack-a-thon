import Product from './Products';

function buildProductsHTML(state){
    return state.products.books.map((product) => `${Product(product)}`).join(' ');
}
export default (states) => `${buildProductsHTML(states)}`;
