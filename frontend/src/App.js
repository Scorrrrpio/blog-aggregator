import React, { useEffect, useState } from 'react';
import './App.css';
import BlogList from './components/BlogList';
import UploadForm from './components/UploadForm';
import { getBlogs } from './services/api';

function App() {
  const [blogs, setBlogs] = useState([]);

  // TODO this does nothing
  const fetchBlogs = async() => {
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs (App.js):", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="AppWrapper">
      <UploadForm onBlogAdded={fetchBlogs} />
      <BlogList blogs={blogs}/>
    </div>
  );
}

export default App;
