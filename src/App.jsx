import React from 'react';
import { useTodosQuery } from './hooks/useTodos';

const App = () => {
  const { data: todos } = useTodosQuery();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default App;
