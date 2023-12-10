import React from 'react';
import { useTodosQuery } from './api';

const App = () => {
  const { data: todos } = useTodosQuery();

  console.log(todos);

  return <></>;
};

export default App;
