// https://youtu.be/jI4K7L-LI58
// How To Manage User Roles In Node.js
// express server
const express = require("express");
const app = express();
//
// user data with the different ROLES
const { users } = require("./data");
//
const projectRouter = require("./routes/projects");

// app.use(express.json());
// from where YOU WILL PULL data from a post request, this is actually an API
//
app.use(express.json());
app.use(setUser);
app.use("/projects", projectRouter);
//
//
//  the router for the homepage
app.get("/", (req, res) => {
  res.send("Home Page");
});
// the Dashboard page where the "logged in" user can go
app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});
// an ADMIN page for admins only
app.get("/admin", (req, res) => {
  res.send("Admin Page");
});

//
//
// THIS MIDDLEWARE si just setting up our user
//
function setUser(req, res, next) {
  const userId = req.body.userId;
  /*
  = req.body.userId;
  
  SO inside of our body, we are going to 
  be passing up a user ID
  
  then here you set up the user based on that user ID from the 
  data inside that data.js file

    if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  */
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

app.listen(5000);
