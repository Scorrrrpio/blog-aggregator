const pool = require("../db");

// Get all blogs
const getAllBlogs = async () => {
    const result = await pool.query("SELECT * FROM blogs ORDER BY created_AT DESC");
    return result.rows;
};

// Add blog
const addBlog = async (url, title, tags) => {
    const result = await pool.query(
        "INSERT INTO blogs (url, title, tags) VALUES ($1, $2, $3) RETURNING *",
        [url, title, tags]
    );
    return result.rows[0];
};

// Delete blog
const deleteBlog = async (id) => {
    const result = await pool.query("DELETE FROM blogs WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = { getAllBlogs, addBlog, deleteBlog };