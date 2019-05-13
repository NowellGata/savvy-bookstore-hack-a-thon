import Header from "./components/Header";
import Navigation from "./components/Navigation";

const root = document.querySelector('#root');

const states = {
    header: {
        title: "Welcome to Savvy BookStore"
    },
    nav: {
        links: ['Books', 'Albums']
    }
}

function render(state){
    root.innerHTML =`
    ${Header(state.header)}
    ${Navigation(state.nav)}
    `;
}

render(states);
