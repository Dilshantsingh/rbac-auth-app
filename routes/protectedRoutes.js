import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Admin-only route
router.get("/admin-dashboard", verifyToken, checkRole(["Admin"]), (req, res) => {
  res.json({
    message: "Welcome to the Admin dashboard",
    user: req.user,
  });
});

// Moderator-only route
router.get("/moderator-panel", verifyToken, checkRole(["Moderator"]), (req, res) => {
  res.json({
    message: "Welcome to the Moderator panel",
    user: req.user,
  });
});

// General user route
router.get("/user-profile", verifyToken, checkRole(["User", "Admin", "Moderator"]), (req, res) => {
  res.json({
    message: "Welcome to the User profile",
    user: req.user,
  });
});

export default router;
