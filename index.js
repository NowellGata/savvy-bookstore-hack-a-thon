import Navigation from "./components/Navigation";

const root = document.querySelector('#root');

const states = {
    nav: {
        links: ['Books', 'Albums']
    }
}

function render(state){
    root.innerHTML =`
    ${Navigation(state.nav)}
    `;
}

render(states);
