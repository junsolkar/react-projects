import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoItem';



function App() {
  return (
    <div>
      <TodoInput />

      <TodoList />
    </div>
  );
}

export default App;
