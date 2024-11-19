const textInput = document.querySelector('#text')
const textLabel = document.querySelector('#textLabel')
const list = document.querySelector('#list')

textInput.onchange = ({ target }) => textLabel.innerText = target.value.split('').reverse().join('')

const strArray = ['text - 1', 'text - 2', 'text - 3', 'text - 4', 'text - 5']

list.innerHTML = ''

strArray.forEach(item => list.innerHTML += `<li>${item}</li>`)