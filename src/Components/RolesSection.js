import React, { useState, useEffect } from 'react';
import api from '../Services/api';
import '../Roles.css';

const RolesSection = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: '', description: '' });
  const [editRole, setEditRole] = useState(null); // For editing a role

  // Fetch roles
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get('/roles');
        setRoles(response.data);
      } catch (error) {
        console.error('Error fetching roles', error);
      }
    };

    fetchRoles();
  }, []);

  // Create new role
  const handleCreateRole = async () => {
    try {
      const response = await api.post('/roles', newRole);
      setRoles([...roles, response.data]); // Add new role to state
      setNewRole({ name: '', description: '' }); // Reset input fields
    } catch (error) {
      console.error('Error creating role', error);
    }
  };

  // Handle editing a role
  const handleEditRole = (role) => {
    setEditRole(role);
  };

  const handleUpdateRole = async () => {
    try {
      const response = await api.put(`/roles/${editRole.id}`, editRole);
      setRoles(roles.map(role => (role.id === editRole.id ? response.data : role)));
      setEditRole(null); // Reset after updating
    } catch (error) {
      console.error('Error updating role', error);
    }
  };

  // Delete role
  const handleDeleteRole = async (roleId) => {
    try {
      await api.delete(`/roles/${roleId}`);
      setRoles(roles.filter(role => role.id !== roleId)); // Remove deleted role from state
    } catch (error) {
      console.error('Error deleting role', error);
    }
  };

  return (
    <section className='roles-section'>
      <h2>Roles</h2>

      {/* Create New Role */}
      <div>
        <h3>Crear Nuevo Rol</h3>
        <input
          type="text"
          placeholder="Nombre del Rol"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newRole.description}
          onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
        />
        <button onClick={handleCreateRole}>Crear Rol</button>
      </div>

      {/* Update Role */}
      {editRole && (
        <div>
          <h3>Editar Rol</h3>
          <input
            type="text"
            value={editRole.name}
            onChange={(e) => setEditRole({ ...editRole, name: e.target.value })}
          />
          <input
            type="text"
            value={editRole.description}
            onChange={(e) => setEditRole({ ...editRole, description: e.target.value })}
          />
          <button onClick={handleUpdateRole}>Actualizar Rol</button>
        </div>
      )}

      {/* Display Roles */}
      <ul>
        {roles.map(role => (
          <li key={role.id}>
            <h3>{role.name}</h3>
            <p>{role.description}</p>
            <button onClick={() => handleEditRole(role)}>Editar</button>
            <button onClick={() => handleDeleteRole(role.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RolesSection;
