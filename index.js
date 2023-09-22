console.log("hi there!");
import express from "express";
const app = express();
const port = 3030;
app.get("/", (req, res) => {
  res.sendFile("sindex.html");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
