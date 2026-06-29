const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ HALAMAN UTAMA (INI YANG KURANG)
app.get("/", (req, res) => {
  res.send("🚀 AI Comic SaaS is Running!");
});

// optional test API
app.get("/api", (req, res) => {
  res.json({ status: "ok", message: "API working" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});