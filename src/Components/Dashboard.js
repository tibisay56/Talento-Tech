import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import PostsSection from './PostsSection';
import CommentsSection from './CommentsSection';
import UsersSection from './UsersSection';
import RolesSection from './RolesSection';
import Navbar from './Navbar';
import '../styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        
      <Navbar />
      <Sidebar />

      <div className="content">
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