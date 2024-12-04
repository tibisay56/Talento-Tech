import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/api';

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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Crear Nuevo Post</h2>
      <input
        type="text"
        placeholder="Título"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <textarea
        placeholder="Contenido"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <input
        type="text"
        placeholder="Estado"
        value={newPost.status}
        onChange={(e) => setNewPost({ ...newPost, status: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <input
        type="text"
        placeholder="Tipo"
        value={newPost.type}
        onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <input
        type="text"
        placeholder="Autor"
        value={newPost.author}
        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        className="block border mb-2 p-2 w-full"
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
