// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime(); // Unique identifier
    onAdd({ id, text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add an activity"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
