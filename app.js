// app.js (or script.js) - Client-side JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const taskInput = document.getElementById('task');
  const taskList = document.getElementById('task-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      taskInput.value = '';

      // You can add logic here to send the task to the server (e.g., via an API).
    }
  });
});
