const express = require("express");
const app = express();
//
//
//
/* original, before the generic and specific

app.use((req, res, next) => {
  console.log(`We called a route ${req.url}`);
  // next();
});


*/
//MIDDLEWARE ******* GENERIC
app.use((req, res, next) => {
  console.log(`We called a route ${req.url}`);
  next();
});
//
// BOTH ARE GOING TO BE called
//
//MIDDLEWARE ******* ROUTE  SPECIFIC
app.use("/get", (req, res, next) => {
  console.log(`SPECIFIC ROUTE EXAMPLE, get`);
  next();
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
