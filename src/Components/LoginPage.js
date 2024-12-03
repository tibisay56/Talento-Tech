import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // State para manejar los inputs del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State para manejar errores
  const [error, setError] = useState('');

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí podrías agregar la lógica de autenticación (API, validaciones, etc.)
    if (email === 'admin@example.com' && password === 'password123') {
      // Si la autenticación es exitosa, redirigimos a otra página (ej. Dashboard)
      navigate('/dashboard');
    } else {
      // Si la autenticación falla, mostrar un error
      setError('Credenciales inválidas, por favor intente de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Iniciar Sesión</h2>
        
        {/* Mostrar el mensaje de error si existe */}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">Recordarme</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <a href="/register" className="text-blue-600 hover:underline">Regístrate aquí</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;