const express = require("express");
const teachers = require("./data");
//
/* careful when requiring, if you do it like 
 this ("data.js") ,it will understand that you want to check 
 the library and not the data.js file */


 
// 
// 
// Express is a library to create concrete API
const app = express();
//
//
// the port 5000 can be also 3000 etc , this will help the app to be public
const port = 5000;

// (()=> {})  callback function
app.listen(port, () => {
  // listening is opening aport in our machine
  console.log(`Started server on port ${port}`);
});

//
//  ROUTES

//MULTIPLE
app.get("/teachers", (req, res) => {
  console.log("Route /teachers called");
  res.json(teachers);
});

// SET up a route for a Single Teacher

app.get("/teachers/:id", (req, res) => {
  console.log("Requested single teacher");
  console.log("params sent to us", req.params);

  const { id } = req.params;
  console.log(`ÌD sent to us: ${id}`);
  let teacher = teachers.find((teacher) => teacher.id == id);

  res.json(teacher);
});

/*




const express = require("express");
//
// Express is a library to create concrete API
const app = express();
//
//
// the port 5000 can be also 3000 etc , this will help the app to be public
const port = 5000;

// (()=> {})  callback function
app.listen(port, () => {
  // listening is opening aport in our machine
  console.log(`Started server on port ${port}`);
});

//
let teachers = [
  { name: "Joseph", id: 1 },
  { name: "Bleda", id: 2 },
  { name: "Benjamin", id: 3 },
  { name: "Mariam", id: 4 },
  { name: "Martina", id: 5 },
  { name: "Navqui", id: 6 },
  { name: "Vasilis", id: 7 },
  { name: "Rob", id: 8 },
];

//
//  ROUTES

//MULTIPLE
app.get("/teachers", (req, res) => {
  //   console.log("Route /teachers called");
  //   Response.send("<h1>Hello from teachers</h1>");

  console.log("Route /teachers called");
  res.json(teachers);
});

// SET up a route for a Single Teacher
// ADD a unique key ID for each teacher, so to browse on them later

app.get("/teachers/:id", (req, res) => {
  console.log("Requested single teacher");
  console.log("params sent to us", req.params);

  const { id } = req.params;
  console.log(`ÌD sent to us: ${id}`);

  //So this is the statement to find a teacher
  //
  //   now with "find" it will loop over every single entry
  //   so for every single teacher in this array , i will make this  check:
  // teacher.id == id); and the first check that turns TRUE, that teacher then will be returned
  let teacher = teachers.find((teacher) => teacher.id == id);

  //never do the follwing: teacher.id = id);
//   If you notice in line 55 there are 2 equals, if you only put one, you will be assigning instead of checking

  res.json(teacher);

  // res.json({}); //if you dont add a response here ,
  //   the browser will show a white page, at least put a {} and then type a ID number to the localhost
});





*/
