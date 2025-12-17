import { Router } from "express";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";

const router = Router();

router.get("/uptime", (req, res) => {
  res.status(200).json({ message: "DEV! Uptime is healthy!!!" });
});

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
