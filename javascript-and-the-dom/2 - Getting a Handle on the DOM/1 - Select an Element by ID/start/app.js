const headline = document.getElementById('headline')
const main = document.getElementById('btn-main')


headline.style.border = `solid 2px red`

main.addEventListener('click', () => {
  main.style.border = 'solid 2px yellow'

})
