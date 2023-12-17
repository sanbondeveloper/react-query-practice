import React from 'react';
import styled from 'styled-components';
import { useTodosQuery } from './hooks/useTodos';

const App = () => {
  const { data: todos } = useTodosQuery();

  return (
    <>
      <Title>TODO</Title>
      <TodoList>
        {todos.map(({ id, title, completed }) => (
          <TodoItem key={id}>
            <input type="checkbox" checked={completed} />
            <div className="title">{title}</div>
          </TodoItem>
        ))}
      </TodoList>
    </>
  );
};

export default App;

const Title = styled.h1``;

const TodoList = styled.ul`
  list-style: none;
  padding-left: 0px;
  height: 500px;
  overflow-y: scroll;
`;

const TodoItem = styled.li`
  margin: 0px 5px;
  padding: 20px 0px;
  display: flex;
  align-items: center;

  .title {
    margin-left: 10px;
  }

  & + li {
    border-top: 1px solid #ccc;
  }
`;
