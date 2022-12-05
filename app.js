

const input = document.getElementById('input');
const button = document.getElementById('button');
const ul = document.querySelector('.lists');
const xMark = document.querySelector('xmark')

function addList (text) {
    const list = document.createElement('li');
    list.classList.add('list')
    const name = document.createElement('p')
    name.innerText=  text;
    input.value=''
    const button = document.createElement('button')
    button.classList.add('xmark')
    const icon = document.createElement('i')
    icon.classList.add('fa-solid','fa-xmark')
    icon.onclick  = ()=> list.remove()
    
    button.append(icon);
    list.append(name,button);
    ul.append(list)
    
}



button.addEventListener('click', () => addList(input.value))
input.addEventListener('keyup', (e) => {
    if(e.key=='Enter') {
        addList(input.value)
    }
})