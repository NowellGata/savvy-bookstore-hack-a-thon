import Book from "./Book"

export default function(booxState) {
  return `
    <figure>
      ${Book(booxState[0])}
    </figure>
  `
}