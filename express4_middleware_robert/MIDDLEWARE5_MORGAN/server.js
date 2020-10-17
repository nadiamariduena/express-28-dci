const express = require("express");
const app = express();
const morgan = require("morgan");
//
//
//
//----------------  MIDDLEWARE * GENERIC  --------
// WHEN YOU ARE GOING TO START USING MORGAN you hide the generic
// //
// app.use((req, res, next) => {
//   console.log(`We called a route ${req.url}`);
//   next();
// });
//_______________________________________________
//_______________________________________________
//
//

app.use(express.json()); //JSON body parser middleware
//
//
app.use(morgan("dev")); //setup morgan request logger middleware

//----------------  ROUTE  *  SPECIFIC --------
//
const getMiddleWareUser = (req, res, next) => {
  //1
  console.log(
    `Hello GET, in process to validate user , if this is correct then we will check the ticket`
  );

  next(); //if all is fine  next() will allow me to check the ticket
};

const getMiddleWareTicket = (req, res, next) => {
  //2
  console.log(`Hello GET, in process to validate the ticket`);
  // error handling, you have to hide the next() to see the error message.
  // res.json({
  //   error: "Your ticket is not valid", //if this show under an statement the user will not be able go to the next step
  // });
  next();
  //if all is fine  next() will allow me to reach destination and watch the movie
};

// ***********************************************

app.get("/get", getMiddleWareUser, getMiddleWareTicket, (req, res) => {
  res.json({
    //3
    message: "I reached the destination, i can watch the movie now",
  });
});
// app.get("/get", getMiddleWareUser, getMiddleWareTicket, (req, res) => {  in this line you can add as many middlewares you want
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
