const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", require("./routes/projects"));
app.use("/api/contact", require("./routes/contact"));

app.listen(5000, () => console.log("Backend running"));
app.get("/", (req, res) => {
  res.json({ status: "Backend is running" });
});
