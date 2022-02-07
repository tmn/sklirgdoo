import React from 'react';

import { useTodo } from './appState';

import TodoItem from './TodoItem';

export default function TodoList() {
  const { state } = useTodo();

  return (
    <ul>
      {
        state.todos.map((todo, index) => (
          <TodoItem key={`todoItem-${index}`} item={todo} index={index} />
        ))
      }
    </ul>
  );
}
