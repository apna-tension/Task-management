
import React from 'react';
import TodoList from '../components/TodoList';
import './Todo.css';

const Todo = () => {
  return (
    <div className="todo-page">
      <h1>Your To-Dos</h1>
      <TodoList />
    </div>
  );
};

export default Todo;
