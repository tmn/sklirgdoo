import { TodoProvider } from './appState';

import TodoNewItem from './TodoNewItem';
import TodoList from './TodoList';

import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoNewItem />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
