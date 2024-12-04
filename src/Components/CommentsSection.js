import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Comentarios.css'
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; 
import api from '../Services/api';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); 
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

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

    // Add comment handler
    const handleAddComment = async () => {
      if (newComment.trim()) {
        try {
          const response = await api.post('/comments', { text: newComment });
          setComments([...comments, response.data]);
          setNewComment(""); // Clear input after adding
        } catch (error) {
          console.error('Error adding comment', error);
        }
      }
    };

  return (
    <div className='comment-section'>
      <h2>Comentarios</h2>
      <div>
        {comments.length === 0 ? (
          <p>No hay comentarios aún.</p>
        ) : (
          <ul className='comment-list'>
            {comments.map((comment) => (
              <li key={comment.id}>
                <span className='comment-author'>{comment.author}</span>
                <span className='comment-text'>{comment.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className='comment-input'>
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


