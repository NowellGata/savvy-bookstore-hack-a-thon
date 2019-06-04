export default (state) => `
    <img src=${state.image} alt="Photo wuz here">
    <figcaption>${state.title} - ${state.creator} - ${state.price}</figcaption>
    <ul>
        <li>${state.selling_points[0]}</li>
        <li>${state.selling_points[1]}</li>
        <li>${state.selling_points[2]}</li>
    </ul>
`;
