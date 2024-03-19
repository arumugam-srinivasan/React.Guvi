import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Name: Office Task-1', description: 'Description: this is the description for My first Task', completed: false },
    { id: 2, name: 'Name: Office Task-2', description: 'Description: this is the description for My Second Task', completed: false },
    { id: 3, name: 'Name: Office Task-3', description: 'Description: this is the description for My Third Task', completed: false },
  ]);

  const [editingTodo, setEditingTodo] = useState(null);

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id, newName, newDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, name: newName, description: newDescription } : todo
      )
    );
    setEditingTodo(null);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
  };

  const handleCancelClick = () => {
    setEditingTodo(null);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <input type="text" placeholder="Add Todo" />
      <select>
        <option value="all">All</option>
      </select>
      <ul>
       {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo && editingTodo.id === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingTodo.name}
                  onChange={(e) => setEditingTodo({ ...editingTodo, name: e.target.value })}
                />
                <input
                  type="text"
                  value={editingTodo.description}
                  onChange={(e) => setEditingTodo({ ...editingTodo, description: e.target.value })}
                />
                <button onClick={() => handleEdit(todo.id, editingTodo.name, editingTodo.description)}>
                  Save
                </button>
                <button onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompleted(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.name}
                </span>
                <p>{todo.description}</p>
                <button onClick={() => handleEditClick(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;