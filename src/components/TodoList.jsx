import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const List = styled.div`
  margin-top: 20px;
`;

const TodoList = ({ todos, removeTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
      ))}
    </List>
  );
};

export default TodoList;
