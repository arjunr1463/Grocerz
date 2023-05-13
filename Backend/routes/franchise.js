import express from "express";
import multer from "multer";
import {
  createFranchise,
  deleteFranchise,
  editFranchise,
  getAllFranchise,
} from "../controllers/franchise.js";
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

//franchise
router.post("/register", upload.single("gst_certificate"), createFranchise);
router.get("/getallfranchise", getAllFranchise);
router.delete("/deletefranchise/:email_id", deleteFranchise);
router.put("/editfranchise", editFranchise);

export default router;
