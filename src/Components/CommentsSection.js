import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; 
import api from '../Services/api';
import '../styles.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [editComment, setEditComment] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await api.get('/comments');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };
    fetchComments();
  }, []);

  // Handlers
  const handleCreateRedirect = () => {
    navigate('/dashboard/comments/create');
  };

  const handleEditComment = (comment) => {
    setEditComment(comment); 
  };

  const handleDeleteComment = async (commentId) => {  
    try {
      await api.delete(`/comments/${commentId}`);
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment', error);
    }
  };

  return (
    <section className="comments-section">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Comments</h2>
        <button
          onClick={handleCreateRedirect}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
        >
          <FaPlus className="mr-2" /> Crear Comment
        </button>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Título</th>
            <th className="border border-gray-300 px-4 py-2">Contenido</th>
            <th className="border border-gray-300 px-4 py-2">Estado</th>
            <th className="border border-gray-300 px-4 py-2">Tipo</th>
            <th className="border border-gray-300 px-4 py-2">Autor</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {comments.map(comment => (
            <tr key={comment.id}>
              <td className="border border-gray-300 px-4 py-2">{comment.title}</td>
              <td className="border border-gray-300 px-4 py-2">{comment.content}</td>
              <td className="border border-gray-300 px-4 py-2">{comment.status}</td>
              <td className="border border-gray-300 px-4 py-2">{comment.type}</td>
              <td className="border border-gray-300 px-4 py-2">{comment.author}</td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditComment(comment)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteComment(comment.id)} 
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CommentSection;


