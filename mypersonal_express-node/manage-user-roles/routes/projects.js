const express = require("express");
const router = express.Router();
const { projects } = require("../data");

//
//
// get ROUTE to get all of the prjects
router.get("/", (req, res) => {
  res.json(projects);
});
//
//
// THEN a route to get just a single project
router.get("/:projectId", setProject, (req, res) => {
  res.json(req.project);
});

//
//
// then this single route to SET the PROJECT for the route in line 14
function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId);
  req.project = projects.find((project) => project.id === projectId);
  // find: to get the first user with that value in one ARRAY

  if (req.project == null) {
    res.status(404);
    return res.send("Project not found");
  }
  next();
}

module.exports = router;

/*
The find() method returns the value of the first element in an array that pass a test (provided as a function).
Get the value of the first element in the array that has a value of 18 or more:

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);


  https://www.w3schools.com/jsref/jsref_find.asp
}
---------------------
MAP
https://www.w3schools.com/jsref/jsref_map.asp

The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.



---------------------
filter() Method
Return an array of all the values in the ages array that are 18 or over:
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}

result: 32,33,40
https://www.w3schools.com/jsref/jsref_filter.asp




THIS IS IMPORTANT WHEN YOU WANT TO FIND  a specific user and not all the user with a similar name
as it will be a mess when logging :)
*/
