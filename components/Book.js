export default (book) => `
    <img src=${book.pictureUrl} alt="Photo wuz here">
    <figcaption>${book.name}</figcaption>
    <ul>
        <li>${book.sellingPoints[0]}</li>
        <li>${book.sellingPoints[1]}</li>
        <li>${book.sellingPoints[2]}</li>
    </ul>
`;