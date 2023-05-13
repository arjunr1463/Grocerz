import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import franchise from "./routes/franchise.js";
import user from "./routes/user.js";
import admin from "./routes/admin.js";
import dbConnect from "./config/dbConnect.js";

const app = express();
dotenv.config();

//MySQL
dbConnect().then(() => console.log("Database connected successfully"));

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api/admin", admin);
app.use("/api/user", user);
app.use("/api/franchise", franchise);

//connection
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Connected to ${PORT} successfully`));
