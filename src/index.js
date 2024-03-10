document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const form = document.getElementById('creat-task-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskDescription = document.getElementById('new-task-description').value;

  const newTaskElement = document.createElement('li');
  newTaskElement.textContent = taskDescription;

  const taskList = document.getElementById('task-list');
  taskList.appendChild(newTaskElement);

  document.getElementById('new-task-description').value = '';
});
