import React from 'react';
import './App.css';

import UserForm from './components/UserForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Github Info App</h1>
      </header>
      <UserForm />
    </div>
  );
}

export default App;
