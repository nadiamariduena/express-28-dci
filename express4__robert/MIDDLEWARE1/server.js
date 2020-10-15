const express = require("express");
const app = express();
//
//
//
//
app.use((req, res, next) => {
  console.log("CALLING A ROUTE using next");
  next();
});

/*
app.use("/")
Tipically when you define routes you start with this: use("/")
but in this new way you dont need it, you can start directly with
the ROUTE handlers (req, res)

app.use((req, res) => {
  console.log("CALLING A ROUTE");
});

But what is going to make the difference with
this new way is the use of: next() , next() is going to grab all 
the routes at the same time and therefore EXECUTE it in all of
them, test in the localhost then in the rested/POST 

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
