// backend/middleware/adminMiddleware.js

exports.adminOnly = (req, res, next) => {
  // This value must come from authMiddleware
  if (req.userRole !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  next();
};




