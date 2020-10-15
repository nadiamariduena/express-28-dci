const express = require("express");
const app = express();
//
//
//
//MIDDLEWARE *******************
app.use((req, res, next) => {
  console.log("CALLING A ROUTE using next");
  next();
});

/*
 The Middleware will INTERCEPT and check
  if the data send is 
 correct, and only if it s correct it will FORWARD
 the user to the ROUTE, example:
 LOGIN situation , if the user dont give a correct
 answer, the middleware is not going to redirect the user
 to the route of the welcome user (your fb perso profile )

*/

// ------------------
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.post("/", (req, res) => {
  res.json({
    message: "Hello World! POST",
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port port!");
});
