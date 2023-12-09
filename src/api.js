import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

  return response.data;
};

const fetchTodo = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return response.data;
};

export const useTodosQuery = () => useQuery({ queryKey: ['todos'], queryFn: () => fetchTodos() });

export const useTodoQuery = (id) => useQuery({ queryKey: ['todo', { id }], queryFn: () => fetchTodo(id) });
