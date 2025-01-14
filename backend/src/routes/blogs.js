const express = require("express");
const router = express.Router();
const { getAllBlogs, addBlog, deleteBlog } = require("../models/blogs");

// Get all blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await getAllBlogs();
        res.json(blogs);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add blog
router.post("/", async (req, res) => {
    const { url, title, tags } = req.body;
    try {
        const newBlog = await addBlog(url, title, tags);
        res.status(201).json(newBlog);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete blog
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBlog = await deleteBlog(id);
        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.json({ message: "Blog deleted", blog: deletedBlog });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;