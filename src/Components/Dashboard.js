import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import PostsSection from './PostsSection';
import CommentsSection from './CommentsSection';
import UsersSection from './UsersSection';
import RolesSection from './RolesSection';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import '../styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-main flex">
        <Sidebar /> 
        <div className="content flex-1 p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-8">¡Bienvenido al Dashboard!</h1>
          
          <Routes>
            <Route path="posts" element={<PostsSection />} />
            <Route path="posts/create" element={<CreatePost />} />
            <Route path="comments" element={<CommentsSection />} />
            <Route path="users" element={<UsersSection />} />
            <Route path="roles" element={<RolesSection />} />
          </Routes>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;