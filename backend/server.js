const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/projects", require("./routes/projects"));
app.use("/api/contact", require("./routes/contact"));

// health check
app.get("/", (req, res) => {
  res.json({ status: "Backend is running" });
});

// IMPORTANT: dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

app.get("/debug/port", (req, res) => {
  res.json({
    envPort: process.env.PORT,
    finalPortUsed: process.env.PORT || 5000
  });
});
