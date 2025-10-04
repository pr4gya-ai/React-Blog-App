import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !category) {
      alert("Please fill in all fields.");
      return;
    }

    const newPost = {
      title,
      content,
      category: category.trim(),
      date: new Date().toLocaleDateString(),
    };

    addPost(newPost);
    navigate('/');
  };

  return (
    <div className="create-post-form">
      <h2 className="create-post-title">Create New Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category" className="form-label">Category (e.g., React, Tech)</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
            required
          ></textarea>
        </div>

        <button type="submit" className="form-button">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;