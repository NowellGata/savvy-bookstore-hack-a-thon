export default function(state) {
  return `<nav>
    <ul>
      <li>${state.nav.links[0]}</li>
      <li>${state.nav.links[1]}</li>
    </ul>
  </nav>`
}