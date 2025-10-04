import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getStoredPosts, savePosts } from './data/posts';
import './App.css';

import Layout from './components/Layout';

import Home from './pages/Home';
import PostDetail from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import CategoryPage from './pages/CategoryPages';

function App() { 
  const [posts, setPosts] = useState(() => getStoredPosts());

  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  const addPost = (newPostData) => {
    
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    
    const postWithId = { ...newPostData, id: newId };

    setPosts(prevPosts => [...prevPosts, postWithId]);
    
  };

  return (
    <Router>
    
      <Layout posts={posts}>
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />

          <Route path="/posts/:id" element={<PostDetail posts={posts} />} />

          <Route path="/category/:name" element={<CategoryPage posts={posts} />} />
          
          <Route path="/create" element={<CreatePost addPost={addPost} />} />

          <Route path="*" element={<h2 className="text-4xl text-center text-red-600">404: Page Not Found</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;