import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateComment = ({ postId }) => {
  const [newComment, setNewComment] = useState('');
  const navigate = useNavigate();

  const handleCreateComment = () => {
    axios.post(`http://localhost:8080/api/comments/${postId}`, { text: newComment, author: 'Usuario' })
      .then((response) => {
        navigate(`/comments/${postId}`);  // Redirige a la vista de comentarios
      })
      .catch((error) => {
        console.error("Error al crear comentario:", error);
      });
  };

  return (
    <div>
      <h2>Crear Nuevo Comentario</h2>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Escribe tu comentario"
      />
      <button onClick={handleCreateComment}>Crear Comentario</button>
    </div>
  );
};

export default CreateComment;
