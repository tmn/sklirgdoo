import React from 'react';

const TodoContext = React.createContext();

const initialTodoItem = {
  todo: '',
  note: '',
  tags: [],
  due: '',
  done: false
}

const initialState = {
  todos: [
    {
      ...initialTodoItem,
      todo: 'Todo 1',
    },
    {
      ...initialTodoItem,
      todo: 'Todo 2',
    }
  ]
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const newTodo = { ...initialTodoItem, todo: action.payload };
      const todos = [newTodo, ...state.todos];

      return { ...state, todos: todos };
    }

    case 'done':
      return { ...state };

    case 'delete':
      return { ...state };

    case 'edit': {
      const { payload: { index, todo } } = action;

      const todos = [...state.todos];
      todos[index].todo = todo;

      return { ...state, todos: todos };
    }

    default:
      return state;
  }
}


function TodoProvider({ children }) {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);
  const value = { state, dispatch };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

function useTodo() {
  const context = React.useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }

  return context;
}

export { TodoProvider, useTodo };
