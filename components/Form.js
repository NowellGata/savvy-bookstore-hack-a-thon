export default () => `
<form action="#">
  <span>
    <label for="title">Book Title</label>
    <input type="text" id="title" placeholder="Book Title" />
  </span>
  <span>
    <label for="creator">Author</label>
    <input type="text" id="creator" placeholder="Author" />
  </span>
  <div>
    <label for="image">URL</label>
    <input
      type="url"
      id="image"
      placeholder="https://example.com"
      pattern="https://.*"
      size="30"
      required
    />
  </div>
  <div>
    <label for="price">Price</label>
    <input type="number" id="price" placeholder="Price" />
  </div>
  <div>
    <label for="selling_points">Selling Points</label>
    <textarea
      id="selling_points"
      cols="30"
      rows="10"
    ></textarea>
  </div>
  <div>
    <input type="radio" id="book" name="type" value="book">
    <label for="book">Book</label>
  </div>
  <div>
  <input type="radio" id="album" name="type" value="album">
    <label for="album">Album</label></div>
  <div>
      <input type="submit" value="Submit!"/>
  </div>
</form>
`;
