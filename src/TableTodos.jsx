import React from 'react';
import { Table } from 'antd';
import { useTodosQuery } from './api';

const columns = [
  {
    title: 'userId',
    dataIndex: 'userId',
    key: 'userId',
    align: 'center',
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'completed',
    dataIndex: 'completed',
    key: 'completed',
    align: 'center',
    render: (value) => (value ? 'O' : 'X'),
  },
];

const TableTodos = () => {
  const { data: todos, isLoading } = useTodosQuery();

  if (isLoading) return <div>로딩중...</div>;

  return <Table dataSource={todos} columns={columns} />;
};

export default TableTodos;
