// Function to update the table rows with data from local storage
function updateTableRows() {
    // Get the tbody element of the table
    const tableBody = document.querySelector('tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Get the tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('task-list')) || [];

    // Loop through each task and create table rows
    tasks.forEach((task) => {
        // Create a new table row
        const row = document.createElement('tr');

        // Create table data cells for each property of the task
        const nameCell = document.createElement('td');
        nameCell.textContent = task.name;

        const descCell = document.createElement('td');
        descCell.textContent = task.description;

        const startDateCell = document.createElement('td');
        startDateCell.textContent = task.startDate;

        const endDateCell = document.createElement('td');
        endDateCell.textContent = task.endDate;

        const priorityCell = document.createElement('td');
        priorityCell.textContent = task.priority;

        const addToProgressCell = document.createElement('td');
        const addToProgressButton = document.createElement('button');
        addToProgressButton.textContent = 'Add';
        addToProgressButton.addEventListener('click', () => {
            // Move task to progress and update local storage
            moveTaskToProgress(task);
            // Remove the row from the table
            tableBody.removeChild(row);
        });
        addToProgressCell.appendChild(addToProgressButton);

        // Append all cells to the row
        row.appendChild(nameCell);
        row.appendChild(descCell);
        row.appendChild(startDateCell);
        row.appendChild(endDateCell);
        row.appendChild(priorityCell);
        row.appendChild(addToProgressCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Update the task count
    const taskCount = document.getElementById('task-count');
    taskCount.textContent = tasks.length;
}

// Function to move task to progress and update local storage
function moveTaskToProgress(task) {
    const priorityList = JSON.parse(localStorage.getItem('priority-list')) || [];
    priorityList.push(task);
    localStorage.setItem('priority-list', JSON.stringify(priorityList));
}

// Add event listener to the filter select element
const filterSelect = document.getElementById('filter');
filterSelect.addEventListener('change', () => {
    const selectedPriority = filterSelect.value;
    filterTasksByPriority(selectedPriority);
});

// Function to filter tasks by priority
function filterTasksByPriority(priority) {
    const tasks = JSON.parse(localStorage.getItem('task-list')) || [];

    // Filter tasks based on selected priority
    const filteredTasks = tasks.filter((task) => task.priority === priority);

    // Update table rows with filtered tasks
    updateTableRows(filteredTasks);
}

// Call the updateTableRows function initially to load all tasks
updateTableRows();
