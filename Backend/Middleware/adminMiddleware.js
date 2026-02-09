import jwt from "jsonwebtoken";
import Admin from "../Models/admin.js";

export const adminProtect = async (req, res, next) => {
  let token;

  // Check Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find admin from DB (without password)
      req.admin = await Admin.findById(decoded.id).select("-password");

      // If admin not found
      if (!req.admin) {
        return res.status(401).json({ message: "Not authorized as admin" });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: "Admin token failed" });
    }
  }

  // If no token
  if (!token) {
    return res.status(401).json({ message: "No admin token provided" });
  }
};
