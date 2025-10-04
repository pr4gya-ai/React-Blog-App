import BlogCard from '../components/BlogCard';

const Home = ({ posts }) => {
  return (
    <div className="home-page">
      <h2 className="home-title">Latest Articles</h2>
      <div className="home-posts">
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="home-empty">No posts found. Why not create one?</p>
        )}
      </div>
    </div>
  );
};

export default Home;