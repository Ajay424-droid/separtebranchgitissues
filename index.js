import express from "express";
import mysql from "SQL";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("common"));

// mysql connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "TEST",
  port: process.env.DB_PORT
});

// connect database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
  }
});

// test route
app.get("/", (req, res) => {
  res.json("Server is running");
});

// sample api (fetch data)
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
