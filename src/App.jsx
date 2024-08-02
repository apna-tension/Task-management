import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
`;

const TodoContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 500px;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 40px;
`;

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <AppContainer>
      <TodoContainer>
        <Title>List Your Task</Title>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </TodoContainer>
    </AppContainer>
  );
};

export default App;
