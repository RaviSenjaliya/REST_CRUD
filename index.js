import { app } from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("db connect successfully");
  } catch (error) {
    console.log("Db connect error" + error);
  }
};

const PORT = process.env.PORT || 3000;
dbConnect()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
    });

    app.listen(PORT, () => {
      console.log(`app listen on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("db error " + error);
  });
