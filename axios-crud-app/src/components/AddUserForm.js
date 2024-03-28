// components/AddUserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name: name
      });
      console.log('User added:', response.data);
      // Add functionality to update state with the new user
      setName('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="add-user-form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUserForm;
