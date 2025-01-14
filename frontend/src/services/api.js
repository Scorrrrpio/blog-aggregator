import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getBlogs = async() => {
    try {
        const response = await api.get("/api/blogs");
        return response.data;
    }
    catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
};

export default api;