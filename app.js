document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const taskInput = document.getElementById('task');
  const taskList = document.getElementById('task-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      // Create a task item
      const taskItem = document.createElement('li');

      // Task text
      const taskTextElement = document.createElement('span');
      taskTextElement.textContent = taskText;

      // Edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        const updatedText = prompt('Edit task:', taskTextElement.textContent);
        if (updatedText !== null) {
          taskTextElement.textContent = updatedText;
          // You can add logic here to send the updated task to the server (e.g., via an API).
        }
      });

      // Done button
      const doneButton = document.createElement('button');
      doneButton.textContent = 'Done';
      doneButton.addEventListener('click', () => {
        // Apply a strike-through effect
        taskTextElement.style.textDecoration = 'line-through';
        
        // Remove the task item after a brief delay (you can adjust the delay as needed)
        setTimeout(() => {
          taskItem.remove();
        }, 1000); // Remove after 1 second (1000 milliseconds)
      });
      
      taskTextElement.style.marginRight = '10px';

      // Append elements to the task item
      taskItem.appendChild(taskTextElement);
      taskItem.appendChild(editButton);
      taskItem.appendChild(doneButton);

      // Add the task item to the task list
      taskList.appendChild(taskItem);

      taskInput.value = '';
    }
  });
});
