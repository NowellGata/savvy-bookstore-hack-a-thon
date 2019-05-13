import Navigation from "./components/Navigation";

const root = document.querySelector('#root');

const state = {
    nav: {
        links: ['Books', 'Albums']
    }
}

function render(state){
    root.innerHTML =`
    ${Navigation(state.nav)}
    `;
}

render(state);
