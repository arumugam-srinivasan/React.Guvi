// App.js
import React from 'react';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>User Management System</h1>
      <AddUserForm />
      <UserList />
    </div>
  );
}

export default App;
