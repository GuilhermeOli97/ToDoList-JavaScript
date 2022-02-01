let add = document.querySelector('.add');
let input = document.querySelector('.input');
let notepad = document.querySelector('.notepad');
let clear = document.querySelector('.clear');
let deleteList = document.querySelectorAll('.remove');



add.addEventListener('click',()=>{
    let container = document.createElement('div');
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('x'));
    button.classList.add('remove');
    let element = document.createElement('p');
    element.appendChild(document.createTextNode(input.value));
    container.appendChild(element);
    container.appendChild(button);
    container.style.display = 'flex'
    container.style.justifyContent = 'space-between';
    button.addEventListener('click', () => {
      notepad.removeChild(container);  
    })
    notepad.appendChild(container);
    
});

clear.addEventListener('click', () =>{
    notepad.innerHTML = '';
})

deleteList.forEach(item => {
    console.log(item)
    item.addEventListener('click',()=>{

        console.log(item)
    })
});
