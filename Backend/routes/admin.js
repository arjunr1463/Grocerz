import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi im admin");
});

export default router
