// Function to update the table rows with data from local storage
function updateTableRows() {
    // Get the tbody element of the table
    const tableBody = document.querySelector('tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Get the tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('priority-list')) || [];

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

        const addToDoneCell = document.createElement('td');
        const addToDoneButton = document.createElement('button');
        addToDoneButton.textContent = 'Add';
        addToDoneButton.addEventListener('click', () => {
            // Move task to done and update local storage
            moveTaskToDone(task);
            // Remove the row from the table
            tableBody.removeChild(row);
        });
        addToDoneCell.appendChild(addToDoneButton);

        // Append all cells to the row
        row.appendChild(nameCell);
        row.appendChild(descCell);
        row.appendChild(startDateCell);
        row.appendChild(endDateCell);
        row.appendChild(priorityCell);
        row.appendChild(addToDoneCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Update the task count
    const taskCount = document.getElementById('task-count');
    taskCount.textContent = tasks.length;
}

// Function to move task to done and update local storage
function moveTaskToDone(task) {
    const doneList = JSON.parse(localStorage.getItem('done-list')) || [];
    doneList.push(task);
    localStorage.setItem('done-list', JSON.stringify(doneList));
}

// Call the updateTableRows function initially to load all tasks
updateTableRows();
