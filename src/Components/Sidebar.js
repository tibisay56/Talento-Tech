import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white h-full p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard/posts" className="block py-2 px-4 hover:bg-blue-600 rounded">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/dashboard/comments" className="block py-2 px-4 hover:bg-blue-600 rounded">
            Comentarios
          </Link>
        </li>
        <li>
          <Link to="/dashboard/users" className="block py-2 px-4 hover:bg-blue-600 rounded">
            Usuarios
          </Link>
        </li>
        <li>
          <Link to="/dashboard/roles" className="block py-2 px-4 hover:bg-blue-600 rounded">
            Roles
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;