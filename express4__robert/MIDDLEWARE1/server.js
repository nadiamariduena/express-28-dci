const express = require("express");
const app = express();
//
//
//
//MIDDLEWARE *******************
app.use((req, res, next) => {
  console.log(`We called a route ${req.url}`);
  /*you have to add this: ${req.url}  ,to  then
  check the localhost:5000/get and the "rested" on "POST" http://localhost:5000/post
  the result will be:
                                We called a route /post
                                We called a route /get

                                WITHOUT THIS   ${req.url}
                                you will not be able to have that result.
  */
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
