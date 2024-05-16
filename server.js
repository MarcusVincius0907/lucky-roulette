import express from "express";
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.use("/assets", express.static(__dirname + "/dist/assets"));
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const frontPort = 5001;

app.listen(frontPort, () => {
  console.log(`Server listening on http://localhost:${frontPort}`);
});