import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

  return response.data;
};

export const useTodosQuery = (select) => useQuery({ queryKey: ['todos'], queryFn: () => fetchTodos(), select });

export const useTodosCount = () => useTodosQuery((data) => data.length);

export const useTodo = (id) => useTodosQuery((data) => data.find((todo) => todo.id === id));
