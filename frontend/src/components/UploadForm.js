import React, { useState } from "react";
import api from "../services/api";

const UploadForm = ({ onBlogAdded }) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [tags, setTags] = useState([])
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        try {
            const payload = {title, url, tags};
            await api.post("/api/blogs", payload);
            setSuccess(true);
            setTitle("");
            setUrl("");
            setTags([]);
            if (onBlogAdded) onBlogAdded(payload);  // updates parent component
        }
        catch (err) {
            setError("Failed to upload blog. Please try again");
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <h2>Upload new blog</h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            {success && <p style={{color: "green"}}>Blog uploaded successfully!</p>}
            <div>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    URL:
                    <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required/>
                </label>
            </div>
            <div>
                <label>
                    Tags:
                    <input type="text" value={tags.join(" ")} onChange={(e) => setTags(e.target.value.split(" "))}/>
                </label>
            </div>
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;