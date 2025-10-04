import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <Link to={`/posts/${post.id}`} className="blog-card-link">
        <h2 className="blog-card-title">{post.title}</h2>
      </Link>
      <div className="blog-card-meta">
        <span className="blog-card-category">{post.category}</span>
        <span className="blog-card-separator">|</span>
        <span className="blog-card-date">{post.date}</span>
      </div>
      <p className="blog-card-content">
        {post.content}
      </p>
      <Link to={`/posts/${post.id}`} className="blog-card-readmore">
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;