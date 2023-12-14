// src/components/TodoList.js
import React from 'react';
import TodoItem from './ToDoItems';
//import './ToDoList.css';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
