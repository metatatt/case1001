const params = new URLSearchParams(document.location.search.substring(1))
const pColor = params.get('color') ? params.get('color') : 'red'
let scene

switch (pColor) {
  case 'blue':
    scene = 'blue-cube'
    break
  case 'red':
    scene = 'red-cube'
    break
  case 'green':
  default:
    scene = 'green-cube'
}

document.body.insertAdjacentHTML('beforeend', require(`./scenes/${scene}.html`)) 
