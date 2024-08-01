import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "16kb" }));

//=========================================
import User from "./routes/user.route.js";

app.get("/", (req, res) => {
  res.status(200).json("welcome to my CRUD");
});

app.use("/api/v1/user", User);

export { app };
