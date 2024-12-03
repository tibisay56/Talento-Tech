import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Cargar los comentarios de la API
  useEffect(() => {
    axios.get(`http://localhost:8080/api/comments/post/${postId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al cargar los comentarios:", error);
      });
  }, [postId]);

  // Función para manejar la creación de un nuevo comentario
  const handleAddComment = () => {
    axios.post(`http://localhost:8080/api/comments/${postId}`, { text: newComment, author: 'Usuario' })
      .then((response) => {
        setComments([...comments, response.data]);  // Agregar el nuevo comentario a la lista
        setNewComment('');  // Limpiar el campo de entrada
      })
      .catch((error) => {
        console.error("Hubo un error al agregar el comentario:", error);
      });
  };

  // Función para manejar el cambio en el campo de entrada
  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <div>
      <h2>Comentarios</h2>
      <div>
        {comments.length === 0 ? (
          <p>No hay comentarios aún.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.author}:</strong> {comment.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div>
        <textarea 
          value={newComment}
          onChange={handleInputChange}
          placeholder="Escribe tu comentario"
        />
        <button onClick={handleAddComment}>Agregar comentario</button>
      </div>
    </div>
  );
};

export default CommentSection;