import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Form from '/components/Form';
import Footer from './components/Footer';

import axios from 'axios';
import Book from './components/Book';

const root = document.querySelector('#root');

const states = {
       'header': {
        'title': 'Amagone Products Store',
    },
    "navigation": {
        "links": [ 'books', 'albums' ],
    },
    "products": {
        "books": [],
        'albums': []
    },
    'active': 'books',
};

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Form()}
    ${Footer()}
    `;

    document
        .querySelector('form')
        .addEventListener(
            'submit',
            (event) => {
                event.preventDefault();
                const makeToArray =
                Array.from(event.target.elements);
                const newProduct =
                makeToArray
                    .reduce(
                        (product, formField) => {
                            if(formField.name === 'sellingPoints'){
                                product.sellingPoints = formField.value.split(',');
                            }
                            else{
                                product[formField.name] = formField.value;
                            }

                            return product;
                        },
                        {}
                    );


                states.products.books.push(newProduct);
                render(states);
            }
        );
}

render(states);

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

axios.get('https://api.savvycoders.com/books').then((response) => {
    states.products.books = response.data;
});
axios.get('https://api.savvycoders.com/albums').then((response) => {
    states.products.albums = response.data;
});
