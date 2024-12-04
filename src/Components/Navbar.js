import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando React Router para navegación

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">EmprendeNet</h1>
        <div>
          <Link
            to="/"
            className="text-white font-semibold px-4 py-2 hover:bg-blue-700 rounded-md"
          >
            Inicio
          </Link>
          <Link
            to="/login"
            className="text-white font-semibold px-4 py-2 ml-4 hover:bg-blue-700 rounded-md"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;