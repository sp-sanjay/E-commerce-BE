import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import { errorHandler } from "./middlewares/error.middleware.js";
dotenv.config({
  path: "./env",
});

app.use(errorHandler)
connectDB()
  .then(() => {
    const port = process.env.PORT || 8080;

    app.on("Error", (err) => {
      console.log("Error while connecting server", err);
      process.exit(1); //For stoping server
    });
    app.listen(port, () => {
      console.log("connection successfully", port);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed !!!", err);
  });
