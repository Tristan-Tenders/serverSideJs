require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const studentsRouter = require("./routes/students");
const courseRouter = require("./routes/courseRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "hi" });
});

app.use("/api/students", studentsRouter);
app.use("/api/courses", courseRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
