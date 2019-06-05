import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Form from '/components/Form';
import Footer from './components/Footer';

const root = document.querySelector('#root');
const states = {
    'header': {
        'title': 'Amagone Book Store',
    },
    'navigation': {
        'links': [ 'books', 'albums' ],
    },
    'products':{

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
                "Real G's move silent, like Lasagna. -Lil Wayne",,
        ]
      },
    ],
      'albums': []
    }

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
                const data = event.target.elements;
                const newProduct = {
                    'title': data[0].value,
                    'creator': data[1].value,
                    'image': data[2].value,
                    'price': data[3].value,

                    // we'll learn how to handle sellingPoints next
                    'selling_points': data[4].value.split(',')
                };
            });
}

render(states);
