const form = document.getElementById('registrar')
const input = form.querySelector('input')

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const text = input.value
    input.value = ''
    const li = document.createElement('li')
    const ul = document.getElementById('invitedList')
    li.textContent = text
    ul.appendChild(li)
    
})