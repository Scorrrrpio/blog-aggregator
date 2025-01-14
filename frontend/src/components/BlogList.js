import React from "react";
//import React, { useState, useEffect } from "react";
//import { getBlogs } from "../services/api";

const BlogList = ({ blogs }) => {
    /*
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogs();
                setBlogs(data);
            }
            catch (error) {
                setError("Failed to load blogs");
            }
        };

        fetchBlogs();
    }, []);
    */

    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map((blog, index) => (
                    <li key={index}>
                        <a href={blog.url} target="_blank" rel="noopener noreferrer">
                            {blog.title}
                        </a>
                        <span>Tags: {blog.tags?.join(" ")}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default BlogList;