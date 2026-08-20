// backend/middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decoded.id;
      req.userRole = decoded.role;   // 🔥 THIS LINE IS CRITICAL

      return next();
    } catch (error) {
      return res.status(401).json({ message: "Token is invalid" });
    }
  }

  return res.status(401).json({ message: "No token, access denied" });
};

module.exports = protect;



