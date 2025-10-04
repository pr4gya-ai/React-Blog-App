import { Link } from 'react-router-dom';

const Sidebar = ({ categories }) => {
  return (
    <nav className="sidebar-nav">
      <h3 className="sidebar-title">Main Navigation</h3>
      <ul className="sidebar-list">
        <li>
          <Link to="/" className="sidebar-link">🏠 Home</Link>
        </li>
        <li>
          <Link to="/create" className="sidebar-link">➕ Create Post</Link>
        </li>
      </ul>

      <h3 className="sidebar-title">Categories</h3>
      <ul className="sidebar-list">
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/category/${encodeURIComponent(category)}`}
              className="sidebar-link"
            >
              # {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;