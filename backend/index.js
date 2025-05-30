import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user_route.js"
import emailRoute from "./routes/emailroute.js"

dotenv.config({});
connectDB();
const app = express();
const PORT = 8080;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
  origin: [
    'http://localhost:5173', // for local development
    'https://gmail-clone-m16r3isqr-utkarsh-kumars-projects-b1798ef0.vercel.app' // deployed frontend
  ],
  credentials: true,
};
app.use(cors(corsOptions));


app.use("/api/v1/user",userRoute);
app.use("/api/v1/email",emailRoute);



app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
