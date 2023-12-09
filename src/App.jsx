import React from 'react';
import styled from 'styled-components';
import TableTodos from './TableTodos';
import Todo from './Todo';

const App = () => {
  return (
    <StyledWrapper>
      <TableTodos />
      <Todo />
    </StyledWrapper>
  );
};

export default App;

const StyledWrapper = styled.div`
  .search-form {
    margin-bottom: 10px;
  }
`;
