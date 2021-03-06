const express = require("express");
const app = express();
//
//
//
//----------------  MIDDLEWARE * GENERIC  --------
//
app.use((req, res, next) => {
  console.log(`We called a route ${req.url}`);
  next();
});
//_______________________________________________
//_______________________________________________
//
//

//----------------  ROUTE  *  SPECIFIC --------
//
const getMiddleWare = (req, res, next) => {
  //2
  console.log(`Hello GET, in process to reach destination`);
  next(); //next will help you to reach the destination
};
app.get("/get", getMiddleWare, (req, res) => {
  res.json({
    message:
      "Hello GET, finally AFTER checking process to reach dest..I reached the destination",
  });
});
// ------------------

app.post("/post", (req, res) => {
  res.json({
    message: "Hello World! POST",
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port port!");
});

/*


//----------------  ROUTE  *  SPECIFIC --------
//
const getMiddleWare = (req, res, next) => {
  //2
  console.log(`Hello GET, in process to reach destination`);
  next(); //next will help you to reach the destination
};
app.get("/get", getMiddleWare, (req, res) => {
  //1
  //IN THIS LINE : app.get("/get", getMiddleWare, (req, res) => {
  //you can apply as many middleware as you want and coma separates them, check the read me
  res.json({
    message:
      "Hello GET, finally AFTER checking process to reach dest..I reached the destination",
  });
});
// ------------------

app.post("/post", (req, res) => {
  res.json({
    message: "Hello World! POST",
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port port!");
});





*/

/*

            ORIGINAL

            
const express = require("express");
const app = express();
//
//
//
--------------------
original, before the generic and specific

app.use((req, res, next) => {
  console.log(`We called a route ${req.url}`);
  // next();
});
--------------------


//MIDDLEWARE ******* GENERIque
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





*/
