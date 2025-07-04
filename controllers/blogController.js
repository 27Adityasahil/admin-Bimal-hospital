// Required at top:
const Blog = require("../models/Blog");

// Already added:
exports.createBlog = async (req, res) => {
  const { title, content, imageUrl } = req.body;

  try {
    const blog = new Blog({ title, content, imageUrl });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: "Error creating blog" });
  }
};

// ✅ This is what was missing
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ blogs });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, imageUrl } = req.body;

  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, content, imageUrl },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Error updating blog" });
  }
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting blog" });
  }
};
