import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: white;
`;

const DeleteButton = styled.button`
  background: #ff5252;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
`;

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <Item>
      {todo}
      <DeleteButton onClick={() => removeTodo(index)}>Delete</DeleteButton>
    </Item>
  );
};

export default TodoItem;
