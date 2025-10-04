import { useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const CategoryPages = ({ posts }) => {
  const { name } = useParams();
 
  const categoryName = decodeURIComponent(name);
  
  const filteredPosts = posts.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="category-page">
      <h2 className="category-title">
        Articles in Category: <span className="category-name">{categoryName}</span>
      </h2>
      <div className="category-posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="category-empty">
            No posts found in the category "{categoryName}".
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPages;