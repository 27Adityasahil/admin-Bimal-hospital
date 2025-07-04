const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// 🟢 Make blog list public (no token required)

// 🔐 Protect blog management
// router.get("/blogs", getAllBlogs);
// router.post("/", verifyToken, createBlog);
// router.put("/:id", verifyToken, updateBlog);
// router.delete("/:id", verifyToken, deleteBlog);

router.get("/blogs", getAllBlogs);
router.post("/blogs", verifyToken, createBlog);
router.put("/blogs/:id", verifyToken, updateBlog);
router.delete("/blogs/:id", verifyToken, deleteBlog);


module.exports = router;
