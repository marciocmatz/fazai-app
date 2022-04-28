function create() {
    const li = document.createElement('LI')
    const user_input_value = document.getElementById('user_input').value

    if (user_input_value === '') {
        alert('Descreva sua task :)')
        return
    }

    const user_input_text = document.createTextNode(user_input_value)

    const span = document.createElement('SPAN')

    document.getElementById('user_input').value = ''

    span.className = 'text'
    span.appendChild(user_input_text)

    li.appendChild(span)
    
    document.querySelector('ul').appendChild(li)

    doneButton(li)
    closeButton(li)
}


function closeButton(li) {
    const span = document.createElement('SPAN')
    const txt = document.createTextNode('❌')

    span.className = 'close'
    span.appendChild(txt)
    li.appendChild(span)

    span.onclick = () => span.parentElement.style.display = 'none'
}


function doneButton(li) {
    const span = document.createElement('SPAN')
    const txt = document.createTextNode('✔️')

    span.className = 'done'
    span.appendChild(txt)
    li.appendChild(span)

    span.onclick = () => (span.previousElementSibling.style.textDecoration = 'line-through') && (span.previousElementSibling.style.filter = 'brightness(0.8)')
}


document.addEventListener('keypress', function(e){
    if(e.which == 13){
        create();
    }
 }, false);