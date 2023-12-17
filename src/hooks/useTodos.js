import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../utils/fetcher';

export const useTodosQuery = (select) =>
  useQuery({ queryKey: ['todos'], queryFn: () => fetchTodos(), select, placeholderData: [] });

export const useTodosCount = () => useTodosQuery((data) => data.length);

export const useTodo = (id) => useTodosQuery((data) => data.find((todo) => todo.id === id));
