const headline = document.getElementById('headline')
const btnUpdate = document.getElementById('btn-main')

const items = document.getElementsByTagName('li')

for (let i = 0; i < items.length; i++){
  items[i].style.color = 'orchid'

  console.log(items[i])
}

btnUpdate.addEventListener('click', () => {
  // main.style.border = 'solid 2px yellow'
  headline.style.border = `solid 2px red`
  headline.style.fontSize = `60px`

})
