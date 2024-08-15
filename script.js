function addTodo() {
    const input = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        todoList.appendChild(li);
        input.value = '';
    }
}
