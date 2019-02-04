const todoListItems = document.getElementsByClassName('todo-item');

for (i = 0; i < todoListItems.length; i++){
    let span = document.createElement('SPAN');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    todoListItems[i].appendChild(span);
}

const todoList = document.getElementById('todo-list');
todoList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);

const closeButtons = document.getElementsByClassName('close');
for (i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        let liItem = this.parentElement;
        liItem.parentNode.removeChild(liItem);
    }
}