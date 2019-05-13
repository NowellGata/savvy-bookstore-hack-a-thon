export default function(navState) {
  return `<nav>
    <ul>
      <li>${navState.links[0]}</li>
      <li>${navState.links[1]}</li>
    </ul>
  </nav>`
}