document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  // Add todo to the list
  todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = todoInput.value.trim();
    if (!text) return;

    // Send to backend
    await fetch('/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    todoInput.value = '';
    loadTodos(); // Reload todos
  });

  // Load todos from server and display
  async function loadTodos() {
    const res = await fetch('/api/todos');
    const todos = await res.json();

    // Clear old list
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.textContent = todo.text;

      const delBtn = document.createElement('button');
      delBtn.textContent = '❌';
      delBtn.style.marginLeft = '10px';
      delBtn.onclick = async () => {
        await fetch(`/todos/${index}`, { method: 'DELETE' });
        loadTodos(); // Refresh list
      };

      li.appendChild(delBtn);
      todoList.appendChild(li);
    });
  }

  loadTodos(); // Load when page loads
});
