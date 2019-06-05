function buildSellingPoints(state){
    console.log(state.selling_points);

    return state.selling_points.map(
        (sellingPoint) => `<li>${sellingPoint}</li>`
    ).join(' ');
}

export default (state) => `
    <img src=${state.image} alt="Photo wuz here">
    <ul>
        ${buildSellingPoints(state)}
    </ul>
`;
