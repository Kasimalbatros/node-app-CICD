const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000; // 👈 Changed to port 8000

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage
let todos = [];

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (text) {
    todos.push({ text });
    res.status(201).json({ message: 'Todo added' });
  } else {
    res.status(400).json({ error: 'Text is required' });
  }
});

// Delete a todo by index
app.delete('/todos/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (!isNaN(index) && index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted' });
  } else {
    res.status(400).json({ error: 'Invalid index' });
  }
});

// Start server on PORT 8000
app.listen(8000, '0.0.0.0', () => {
  console.log("Server is running on port 8000");
});

