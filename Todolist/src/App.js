// src/App.js
import React, { useState } from 'react';
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';
import Calculator from './components/Calculator';
import './App.css'; // You can create a global CSS file for your app-wide styles

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="header">
        <h1>To Do List and Calculator App</h1>
      </div>
      <div className="todo-section">
        <h1>Todo List</h1>
        <TodoForm onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onUpdate={handleUpdateTodo}
        />
      </div>
      <div className="calculator-section">
        <h1>Calculator</h1>
        <Calculator />
      </div>
      <div className="footer">
        <p>&copy; 2023 To Do List and Calculator App. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
