const btnCreate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const taskList = document.querySelector('.list-container ul');
const listItems = document.getElementsByTagName('li')

// for ( let i = 0; i < listItems.length; i++){
//   listItems[i].addEventListener('mouseover', () =>{
//     listItems[i].textContent = listItems[i].textContent.toUpperCase()
  
//   })

// }

document.addEventListener('click', (event)=> {
  console.log(event.target)

})


btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') { 
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
  } else {
    btnToggle.textContent = 'Show List';                        
    listContainer.style.display = 'none';
  }                         
});

btnCreate.addEventListener('click', () => {
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  list.insertAdjacentHTML( 
    'afterbegin', 
    `<li>${input.value}</i>` 
  );
  input.value = '';
});

btnRemove.addEventListener('click', () => {
  const li = document.querySelector('li:last-child');
  li.remove();
});

