// auth.middleware.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function authMiddleware(req, res, next) {
  try {
    let token = req.headers.authorization;

    // Check if token exists
    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    // Token format: "Bearer <token>"
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }

      // Attach the decoded user/admin data to req.user
      req.user = decoded;

      next();
    });
  } catch (error) {
    console.error("AUTH MIDDLEWARE ERROR:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
