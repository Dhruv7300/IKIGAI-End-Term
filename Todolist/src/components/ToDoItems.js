// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
