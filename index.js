import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Form from "./components/Form"

const root = document.querySelector('#root');

const states = {
    header: {
        title: "Welcome to Savvy BookStore"
    },
    nav: {
        links: ['Books', 'Albums']
    },
    boox: [
        {
            "id": 1,
            "name": "Lasagna: A Retrospective",
            "author": "Garfield",
            "pictureUrl": "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
            "price": 24,
            "sellingPoints": [
                "Lasagna is delicious.",
                "The essential guide to Italian casseroles of all types.",
                "Real G's move silent, like Lasagna. -Lil Wayne"
            ]
        }
    ]
}

function render(state){
    // Form is 'dumb.'
    root.innerHTML =`
    ${Header(state)}
    ${Navigation(state)}
    ${Content(state)}
    ${Form()}
    `;
}

render(states);

document
    .querySelector('form')
    .addEventListener(
        'submit',
        (event) => {
            event.preventDefault();
            const data = event.target.elements;
            const newProduct = {
                'name': data[0].value,
                'author': data[1].value,
                'pictureURL': data[2].value,
                'price': data[3].value,
                
                // TODO: Resolve this.
                'sellingPoints': []
            };

            states.boox.push(newProduct);

            render(states);
        }
    );
