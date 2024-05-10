// Get form element
const form = document.querySelector('form');

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get form input values
    const name = document.getElementById('name').value;
    const description = document.getElementById('desc').value;
    const startDate = document.getElementById('start').value;
    const endDate = document.getElementById('end').value;
    const priority = document.getElementById('priority').value;

    // Create an object with the form data
    const task = {
        name,
        description,
        startDate,
        endDate,
        priority,
    };

    // Get the existing tasks from local storage or initialize an empty array
    const existingTasks = JSON.parse(localStorage.getItem('task-list')) || [];

    // Add the new task to the existing tasks array
    existingTasks.push(task);

    // Store the updated tasks array in local storage
    localStorage.setItem('task-list', JSON.stringify(existingTasks));

    // Reset the form
    form.reset();

    // Display a success message or perform any other desired actions
    console.log('Task stored in local storage!');
}

// Add event listener to the form for submit event
form.addEventListener('submit', handleSubmit);
