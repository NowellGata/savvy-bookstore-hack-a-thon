function buildNavLinks(stateLinks){
    return stateLinks.map(
        (link) => `<li><a href="#">${link}</a></li>`
    ).join(' ');
}

export default function Navigation(state){
    return `
        <nav>
            <ul class="links">
                ${buildNavLinks(state.navigation.links)}
            </ul>
        </nav>
`;
}
