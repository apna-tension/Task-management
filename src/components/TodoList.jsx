import React, { useState, useEffect } from 'react';
import { getTodos, addTodo } from '../api/todo';
import TodoItem from './TodoItem';
import { toast } from 'react-toastify';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        toast.error('Failed to fetch to-dos');
      }
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      const newTodo = await addTodo({ title, description });
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
      toast.success('To-do item added');
    } catch (error) {
      toast.error('Failed to add to-do item');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <form onSubmit={handleAddTodo}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add To-Do</button>
      </form>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;
