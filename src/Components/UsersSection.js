import React, { useState, useEffect } from 'react';
import api from '../Services/api';
import '../Usuarios.css';

const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editUser, setEditUser] = useState(null); // For editing a user

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  // Create new user
  const handleCreateUser = async () => {
    try {
      const response = await api.post('/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' }); 
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  // Handle editing a user
  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleUpdateUser = async () => {
    try {
      const response = await api.put(`/users/${editUser.id}`, editUser);
      setUsers(users.map(user => (user.id === editUser.id ? response.data : user)));
      setEditUser(null); // Reset after updating
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  // Delete user
  const handleDeleteUser = async (userId) => {
    try {
      await api.delete(`/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId)); // Remove deleted user from state
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <section className='users-section'>
      <h2>Usuarios</h2>

      {/* Create New User */}
      <div>
        <h3>Crear Nuevo Usuario</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleCreateUser}>Crear Usuario</button>
      </div>

      {/* Update User */}
      {editUser && (
        <div>
          <h3>Editar Usuario</h3>
          <input
            type="text"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="email"
            value={editUser.email}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
          />
          <button onClick={handleUpdateUser}>Actualizar Usuario</button>
        </div>
      )}

      {/* Display Users */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => handleEditUser(user)}>Editar</button>
            <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersSection;
