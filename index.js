import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Form from '/components/Form';
import Footer from './components/Footer';

const root = document.querySelector('#root');

const states = {
    'header': {
        'title': 'Amagone Products Store',
    },
    'navigation': {
        'links': [ 'books', 'albums' ],
    },
    'products': {
        'books': [
            {
                'id': 1,
                'title': 'Lasagna: A Retrospective',
                'creator': 'Garfield',
                'image':
                'http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg',
                'price': 24,
                'selling_points': [
                    'Lasagna is delicious.',
                    'The essential guide to Italian casseroles of all types.',
                    "Real G's move silent, like Lasagna. -Lil Wayne",
                ]
            }
        ],

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
