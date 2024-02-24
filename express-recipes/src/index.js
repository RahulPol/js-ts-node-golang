import express from "express";

const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello express student!00");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
