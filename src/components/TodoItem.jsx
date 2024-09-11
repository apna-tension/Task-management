import React, { useEffect, useState } from 'react';
import { deleteTodo } from '../api/todo';
import { toast } from 'react-toastify';
import './TodoItem.css';

const TodoItem = ({ todo, onDelete }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
      onDelete(todo._id);
      toast.success('item deleted');
    } catch (error) {
      console.error(error);
      
      toast.error('Failed to delete item');
    }
  };


  return (
    <div className="todo-item">
      <div>
        <h3 onClick={() => setShowDescription(!showDescription)}>{todo.title}</h3>
        {showDescription && <p>{todo.description}</p>}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
