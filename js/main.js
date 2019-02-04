const todoListItems = document.getElementsByClassName('todo-item');
const todoInput = document.getElementById('new-item-input');
const todoBtn = document.getElementById('todo-btn');
const closeButtons = document.getElementsByClassName('close');

for (i = 0; i < todoListItems.length; i++){
    addSpan(i);
}

const todoList = document.getElementById('todo-list');
todoList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);


listenDelete();

function newTodoItem() {
    let li = document.createElement('li');
    let newTodoValue = todoInput.value;
    let text = document.createTextNode(newTodoValue);
    li.appendChild(text);
    if (newTodoValue === '') {
        alert("Can't add empty item to list!");
    } else {
        document.getElementById('todo-list').appendChild(li);
    }
    todoInput.value = '';

    addSpan(li);

    listenDelete();

}

todoBtn.addEventListener('click', newTodoItem, false);

function addSpan(i) {
    if (typeof i === 'number') {
        console.log(typeof i);
        let span = document.createElement('SPAN');
        let text = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(text);
        todoListItems[i].appendChild(span);
    } else {
        console.log(i);
        let span = document.createElement('SPAN');
        let text = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(text);
        i.appendChild(span);
    }
}

function listenDelete() {
    for (i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            if (confirm('Are you sure you want to delete task: ' + this.value)){
                let liItem = this.parentElement;
                liItem.parentNode.removeChild(liItem);
            }
            
        }
    }
}