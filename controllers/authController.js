// controllers/authController.js
const jwt = require("jsonwebtoken");

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  // Hardcoded admin credentials
  const adminEmail = "admin@hospital.com";
  const adminPassword = "admin123";

  if (email === adminEmail && password === adminPassword) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
  expiresIn: "1d",
});
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
