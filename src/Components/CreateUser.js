import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/api';
import '../Usuarios.css';

const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', city: '', country: '', rol: '' });
  const [editUser, setEditUser] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!newUser.name) newErrors.name = 'Nombre es requerido';
    if (!newUser.email) newErrors.email = 'Correo electrónico es requerido';
    if (!/\S+@\S+\.\S+/.test(newUser.email)) newErrors.email = 'Correo electrónico no es válido';
    if (!newUser.phone) newErrors.phone = 'Teléfono es requerido';
    if (newUser.city === 'Seleccionar Ciudad') newErrors.city = 'Ciudad es requerida';
    if (newUser.country === 'Seleccionar País') newErrors.country = 'País es requerido';
    if (newUser.rol === 'Seleccionar Rol') newErrors.rol = 'Rol es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Create new user
  const handleCreateUser = async () => {
    if (!validateForm()) return; // Only proceed if form is valid

    try {
      const response = await api.post('/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '', phone: '', city: '', country: '', rol: '' }); 
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
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input
          type="email"
          placeholder="Correo Electrónico"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="number"
          placeholder="Teléfono"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}

        <label className="block text-gray-600 mb-1" htmlFor="city">
          Ciudad
        </label>
        <select
          id="city"
          value={newUser.city}
          onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="Seleccionar Ciudad">Seleccionar Ciudad</option>
          <option value="Barranquilla">Barranquilla</option>
          <option value="Cali">Cali</option>
          <option value="Medellín">Medellín</option>
          <option value="Bogotá">Bogotá</option>
        </select>
        {errors.city && <p className="text-red-500">{errors.city}</p>}

        <div>
          <label className="block text-gray-600 mb-1" htmlFor="country">
            País
          </label>
          <select
            id="country"
            value={newUser.country}
            onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="Seleccionar País">Seleccionar País</option>
            <option value="Colombia">Colombia</option>
            <option value="México">México</option>
            <option value="Argentina">Argentina</option>
            <option value="Chile">Chile</option>
          </select>
          {errors.country && <p className="text-red-500">{errors.country}</p>}
        </div>

        <div>
          <label className="block text-gray-600 mb-1" htmlFor="rol">
            Rol
          </label>
          <select
            id="rol"
            value={newUser.rol}
            onChange={(e) => setNewUser({ ...newUser, rol: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="Seleccionar Rol">Seleccionar Rol</option>
            <option value="Coordinador">Coordinador</option>
            <option value="Conductor">Conductor</option>
          </select>
          {errors.rol && <p className="text-red-500">{errors.rol}</p>}
        </div>

        <div className="flex space-x-4 mt-4">
          <button onClick={handleCreateUser} className="bg-blue-600 text-white px-4 py-2 rounded">
            Crear Usuario
          </button>

          <button onClick={() => navigate('/dashboard/users')} className="bg-gray-300 text-white px-4 py-2 rounded">
            Cancelar
          </button>
        </div>
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
