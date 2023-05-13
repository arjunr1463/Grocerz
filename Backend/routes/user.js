import express from "express";
import multer from "multer";
import { createUser, getAllUsers } from "../controllers/user.js";
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/register", upload.array("adhaar_image", 2), createUser);
router.get("/getalluser", getAllUsers);

export default router;
