import React, { useState } from 'react';

import { useTodo } from './appState';

export default function TodoItem({ item, index }) {
  const { dispatch } = useTodo();

  function handleKeyDown(event) {
    if (event.key == 'Enter') {
      event.preventDefault();
      dispatch({ type: 'edit', payload: { index: index, todo: event.target.textContent }});
      event.target.blur();
    }
  }

  return (
    <li>
      <input type="checkbox" /> <span contentEditable="true" suppressContentEditableWarning={true} onKeyDown={handleKeyDown}>{item.todo}</span>
    </li>
  );
}
