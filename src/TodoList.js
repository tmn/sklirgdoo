import React from 'react';

import { useTodo } from './appState';

import TodoItem from './TodoItem';

export default function TodoList() {
  const { state, dispatch } = useTodo();

  return (
    <ul>
      {
        state.todos.map((todo, i) => (
          <TodoItem key={`todoItem-${i}`} item={todo}/>
        ))
      }
    </ul>
  );
}
