import React from 'react';

export default function TodoItem({ item }) {
  return (
    <li>
      <input type="checkbox" /> {item.todo}
    </li>
  );
}
