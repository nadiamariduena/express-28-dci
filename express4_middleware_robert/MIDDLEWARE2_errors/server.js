const express = require("express");
const app = express();
//
//
//
//MIDDLEWARE *******************
app.use((req, res, next) => {
  console.log(`We called a route ${req.url}`);
  // next();
});

// ------------------
app.get("/get", (req, res) => {
  res.json({
    message: "Hello World! Get",
  });
});

app.post("/post", (req, res) => {
  res.json({
    message: "Hello World! POST",
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port port!");
});
