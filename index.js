 /*const personForm = document.querySelector('form')

 personForm.onsubmit = (ev) => {
   ev.preventDefault()
   const form = ev.target
   const details = document.querySelector('.details')
  
  const personName = form.personName.value
  const em = document.createElement('p')
  em.textContent = personName
  details.appendChild(em)
    
   const hairColor = form.hairColor.value
   const colorDiv = document.createElement('div')
   colorDiv.style.backgroundColor = hairColor
   colorDiv.style.height = '50px'
   colorDiv.style.width = '100px'
   details.appendChild(colorDiv)

   const age = form.age.value
   const ag = document.createElement('p')
   ag.textContent = age
   details.appendChild(ag)

   const birthplace = form.birthplace.value
   const bp = document.createElement('p')
   bp.textContent = birthplace 
   details.appendChild(bp)

    
}*/
  
  const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}

const handleSubmit = (ev) => {
ev.preventDefault()
const form = ev.target
const details = document.querySelector('.details')

const personName = form.personName.value
const hairColor = form.hairColor.value
const age = form.age.value
const birthplace = form.birthplace.value
const colorDiv = renderColor(hairColor)

const list = document.createElement('ul')

const name = document.createElement('li')
name.textContent = personName
list.appendChild(name)

const hair = document.createElement('li')
hair.appendChild(colorDiv)
list.appendChild(hair)

const agex = document.createElement('li')
agex.textContent = age
list.appendChild(agex)

const bp = document.createElement('li')
bp.textContent = birthplace
list.appendChild(bp)

details.appendChild(list) 
}
personForm.addEventListener('submit', handleSubmit) 