import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo element', () => {
  render(<App />);
  const todoElement = screen.getByText(/Todo 1/i);
  expect(todoElement).toBeInTheDocument();
});
