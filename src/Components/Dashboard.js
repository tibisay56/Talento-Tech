import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import PostsSection from './PostsSection';
import CommentsSection from './CommentsSection';
import UsersSection from './UsersSection';
import RolesSection from './RolesSection';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
        
      <Navbar />
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">¡Bienvenido al Dashboard!</h1>
        
        <Routes>
          <Route path="posts" element={<PostsSection />} />
          <Route path="comments" element={<CommentsSection />} />
          <Route path="users" element={<UsersSection />} />
          <Route path="roles" element={<RolesSection />} />
        </Routes>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;