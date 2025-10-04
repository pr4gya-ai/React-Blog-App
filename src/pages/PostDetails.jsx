import { useParams, Navigate } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const postId = parseInt(id);

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="post-details">
      <div className="post-details-category">
        <span className="post-details-category-badge">{post.category}</span>
      </div>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-meta">Published on: {post.date}</p>
    
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;