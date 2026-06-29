const express = require("express");
const app = express();

app.use(express.json());

// serve frontend
app.use(express.static(__dirname + "/../"));

// homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../index.html");
});

// generate comic API
app.post("/generate", (req, res) => {
  const { prompt } = req.body;

  res.json({
    result: `
🧠 AI COMIC GENERATED

Panel 1:
${prompt}

Panel 2:
Hero starts journey...

Panel 3:
Conflict appears...

Panel 4:
Final cliffhanger...
`
  });
});

// server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("SERVER RUNNING ON " + PORT);
});