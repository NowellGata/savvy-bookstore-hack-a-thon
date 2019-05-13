import Book from "./Book"

export default function(state) {
  return `
    <figure>
      ${Book(state.boox[0])}
    </figure>
  `
}