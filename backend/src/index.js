const express = require("express");
const cors = require("cors");
const blogsRouter = require("./routes/blogs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});