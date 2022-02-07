import React, { useState } from 'react';

import { useTodo } from './appState';

export default function TodoNewItem() {
  const [value, setValue] = useState('');
  const { dispatch } = useTodo();

  function handleInput(event) {
    const { value } = event.target;
    setValue(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key == 'Enter') {
      dispatch({ type: 'add', payload: value });
      setValue('');
    }
  }

  return (
    <div>
      <input type="text" value={value} onKeyDown={handleKeyDown} onChange={handleInput}/>
    </div>
  );
}
