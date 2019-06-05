export default function Navigation(state){
    return `
        <nav>
            <ul class="links">
                <li><a href="#">${state.navigation.links[0]}</a></li>
                <li><a href="#">${state.navigation.links[1]}</a></li>
            </ul>
        </nav>
`;
}
