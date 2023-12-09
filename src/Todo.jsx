import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { useTodoQuery } from './api';

const Todo = () => {
  const [search, setSearch] = useState('1');
  const { data: todo, isLoading } = useTodoQuery(search);

  const handleFinish = (values) => {
    setSearch(values.search);
  };

  if (isLoading) return <div>로딩중...</div>;

  return (
    <StyledWrapper>
      <Form layout="inline" className="search-form" onFinish={handleFinish}>
        <Form.Item name="search">
          <Input placeholder="ID를 입력하세요." autoComplete="off" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          검색
        </Button>
      </Form>
      <div>{todo.title}</div>
    </StyledWrapper>
  );
};

export default Todo;

const StyledWrapper = styled.div`
  .search-form {
    margin-bottom: 10px;
  }
`;
