import Sidebar from './Sidebar';
import { getUniqueCategories } from '../data/posts';

const Layout = ({ posts, children }) => {
  const categories = getUniqueCategories(posts);

  return (
    <div className="app-layout">
     
      <aside className="sidebar">
        <Sidebar categories={categories} />
      </aside>

      <div className="main-content">
      
        <header className="header">
          React Blog App
        </header>
        {children}
      </div>
    </div>
  );
};

export default Layout;