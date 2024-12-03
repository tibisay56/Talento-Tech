import React, { useState, useEffect } from 'react';
import api from '../Services/api';

const PostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editPost, setEditPost] = useState(null); // For editing a post

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, []);

  // Create new post
  const handleCreatePost = async () => {
    try {
      const response = await api.post('/posts', newPost);
      setPosts([...posts, response.data]); // Add new post to state
      setNewPost({ title: '', content: '' }); // Reset the newPost input fields
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

  // Handle editing a post
  const handleEditPost = (post) => {
    setEditPost(post);
  };

  const handleUpdatePost = async () => {
    try {
      const response = await api.put(`/posts/${editPost.id}`, editPost);
      setPosts(posts.map(post => (post.id === editPost.id ? response.data : post)));
      setEditPost(null); // Reset after updating
    } catch (error) {
      console.error('Error updating post', error);
    }
  };

  // Delete post
  const handleDeletePost = async (postId) => {
    try {
      await api.delete(`/posts/${postId}`);
      setPosts(posts.filter(post => post.id !== postId)); // Remove deleted post from state
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  return (
    <section>
      <h2>Posts</h2>

      {/* Create New Post */}
      <div>
        <h3>Create a New Post</h3>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button onClick={handleCreatePost}>Create Post</button>
      </div>

      {/* Update Post */}
      {editPost && (
        <div>
          <h3>Edit Post</h3>
          <input
            type="text"
            value={editPost.title}
            onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
          />
          <textarea
            value={editPost.content}
            onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
          />
          <button onClick={handleUpdatePost}>Update Post</button>
        </div>
      )}

      {/* Display Posts */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleEditPost(post)}>Edit</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostsSection;
