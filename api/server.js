import express from "express";
import pool from "./db.js";
import router from "./routes.js";
import cors from "cors";

const PORT = 2000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`)
})