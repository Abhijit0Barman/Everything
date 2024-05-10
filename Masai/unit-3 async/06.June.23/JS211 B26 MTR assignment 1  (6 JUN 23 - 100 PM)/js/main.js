document.addEventListener('DOMContentLoaded', () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const todoForm = document.getElementById('todoForm');
    const todoTitleInput = document.getElementById('todoTitleInput');
    const todoStatusSelect = document.getElementById('todoStatusSelect');
    const todoPrioritySelect = document.getElementById('todoPrioritySelect');
    const todoContainer = document.getElementById('todoContainer');

    const renderTodos = () => {
        todoContainer.innerHTML = '';

        todos.forEach((todo, index) => {
            const todoElement = document.createElement('div');
            todoElement.classList.add('todo');

            const titleElement = document.createElement('p');
            titleElement.textContent = todo.title;

            const statusElement = document.createElement('p');
            statusElement.textContent = `Status: ${todo.status}`;

            const priorityElement = document.createElement('p');
            priorityElement.textContent = `Priority: ${todo.priority}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                deleteTodo(index);
            });

            todoElement.appendChild(titleElement);
            todoElement.appendChild(statusElement);
            todoElement.appendChild(priorityElement);
            todoElement.appendChild(deleteButton);

            todoContainer.appendChild(todoElement);
        });
    };

    const addTodo = (event) => {
        event.preventDefault();

        const title = todoTitleInput.value;
        const status = todoStatusSelect.value;
        const priority = todoPrioritySelect.value;

        const newTodo = {
            title,
            status,
            priority,
        };

        todos.push(newTodo);

        localStorage.setItem('todos', JSON.stringify(todos));

        todoTitleInput.value = '';
        todoStatusSelect.value = 'pending';
        todoPrioritySelect.value = 'high';

        renderTodos();
    };

    const deleteTodo = (index) => {
        todos.splice(index, 1);

        localStorage.setItem('todos', JSON.stringify(todos));

        renderTodos();
    };

    todoForm.addEventListener('submit', addTodo);

    renderTodos();
});
