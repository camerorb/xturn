
const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}

const names = (text) => {
  const name = document.createElement('li')
  name.textContent = text
  return name
}

const ages = (text1) => {
  const age = document.createElement('li')
  age.textContent = text1
  return age
}

const handleSubmit = (ev) => {
ev.preventDefault()
const form = ev.target
const details = document.querySelector('.details')

const personName = "Name: " + form.personName.value 
const hairColor = form.hairColor.value
const age = "Age: " + form.age.value
const birthplace = "Birthplace: " + form.birthplace.value
const colorDiv = renderColor(hairColor)

const list = document.createElement('ul')

list.appendChild(names(personName))

const hair = document.createElement('li')
hair.appendChild(colorDiv)
list.appendChild(hair)

list.appendChild(ages(age))

const bp = document.createElement('li')
bp.textContent = birthplace
list.appendChild(bp)

details.appendChild(list) 
}
personForm.addEventListener('submit', handleSubmit) 