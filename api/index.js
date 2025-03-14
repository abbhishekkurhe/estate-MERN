import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from './routes/listing.route.js'
import path from 'path';
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Stop the server on DB connection failure
  });
  

  const __dirname = path.resolve();
const app = express();

// Middleware for JSON parsing
app.use(express.json());
app.use(cookieParser());


// Define routes before starting the server
app.use("/api/user", router);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname,'/estate/dist')));

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'estate','dist','index.html'))
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000!!!");
});
