import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/api';
import '../Posts.css'

const CreatePost = () => {
  const [newPost, setNewPost] = useState({ title: '', content: '', status: '', type: '', author: '' });
  const navigate = useNavigate();

  const handleCreatePost = async () => {
    try {
      const response = await api.post('/posts', newPost);
      navigate('/dashboard/posts');
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

  return (
    <div className="createpost-section">
      <h2>Crear Nuevo Post</h2>
      <input
        type="text"
        placeholder="Título"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Contenido"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />
      <select
        value={newPost.status}
        onChange={(e) => setNewPost({ ...newPost, status: e.target.value })}
        className="block border mb-2 p-2 w-full"
      >
        <option value="">Select a status</option>
        <option value="ideas">Ideas</option>
        <option value="stories">Stories</option>
        <option value="investment">Investment</option>
        <option value="advice">Advice</option>
        <option value="resources">Resources</option>
        <option value="others">Others</option>
      </select>
      <select
          value={newPost.type}
          onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
          className="block border mb-2 p-2 w-full"
        >
          <option value="">Select a type</option>
          <option value="published">Published</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      <input
        type="text"
        placeholder="Autor"
        value={newPost.author}
        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
      />
      <div className="flex space-x-4">
        <button onClick={handleCreatePost} className="bg-blue-600 text-white px-4 py-2 rounded">
            Crear Post
        </button>
        
        <button onClick={() => navigate('/dashboard/posts')} className="bg-gray-300 text-white px-4 py-2 rounded">
            Cancelar
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

