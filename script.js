document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    // Add task
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<span class="task-text">${taskText}</span><button class="delete-btn">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    });
  
    // Delete task
    taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
      }
    });
  });
  