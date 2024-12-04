import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/api';

const CreateComment = () => {
  const [newComments, setNewComment] = useState({ title: '', content: '', status: '', type: '', author: '' });
  const navigate = useNavigate();

  const handleCreateComment = async () => {
    try {
      const response = await api.comment('/comments', newComments);
      navigate('/dashboard/comments');
    } catch (error) {
      console.error('Error creating comment', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Crear Nuevo Comment</h2>
      <input
        type="text"
        placeholder="Título"
        value={newComments.title}
        onChange={(e) => setNewComment({ ...newComments, title: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <textarea
        placeholder="Contenido"
        value={newComments.content}
        onChange={(e) => setNewComment({ ...newComments, content: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <input
        type="text"
        placeholder="Estado"
        value={newComments.status}
        onChange={(e) => setNewComment({ ...newComments, status: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <input
        type="text"
        placeholder="Tipo"
        value={newComments.type}
        onChange={(e) => setNewComment({ ...newComments, type: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <input
        type="text"
        placeholder="Autor"
        value={newComments.author}
        onChange={(e) => setNewComment({ ...newComments, author: e.target.value })}
        className="block border mb-2 p-2 w-full"
      />
      <div className="flex space-x-4">
        <button onClick={handleCreateComment} className="bg-blue-600 text-white px-4 py-2 rounded">
            Crear Comment
        </button>
        
        <button onClick={() => navigate('/dashboard/comments')} className="bg-gray-300 text-white px-4 py-2 rounded">
            Cancelar
        </button>
        </div>
    </div>
  );
};

export default CreateComment;
