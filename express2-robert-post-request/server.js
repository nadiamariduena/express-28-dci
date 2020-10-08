/*

                                            ***** lesson of the day ** ****
                                                    POST REQUESTS

                                         i will add 2 ** starts for what is new as i am
                                         using the lesson from yesterday, only change** 
                                         i added the teachers ARRAY back to this file.

                        
                                          POST :   Create a new task
                                          DELETE: Delete an existing task
                                          GET:     Get a specific task
                                          GET:    Search for tasks
                                          PUT:    Update an existing task
*/

const express = require("express");
// const teachers = require("./data");

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});

let teachers = [
  { name: "Joseph", id: 1 },
  { name: "Bleda", id: 2 },
  { name: "Benjamin", id: 3 },
  { name: "Mariam", id: 4 },
  { name: "Martina", id: 5 },
  { name: "Navqui", id: 6 },
  { name: "Vasilis", id: 7 },
  { name: "Robert", id: 8 },
];
//
//  ROUTES
app.get("/", (req, res) => {
  res.send("<h1>Welcome to our Api , 2day Express Robert</h1>");
});

//MULTIPLE teachers
app.get("/teachers", (req, res) => {
  console.log("Route /teachers called");
  res.json(teachers);
});

//  Single Teacher

app.get("/teachers/:id", (req, res) => {
  console.log("Requested single teacher");
  console.log("params sent to us", req.params);

  const { id } = req.params;

  console.log(`ÌD sent to us: ${id}`);

  let teacher = teachers.find((teacher) => teacher.id == id);

  res.json(teacher);
});
//
// --------------------------------

/*

//                                  ***** lesson of the day start here ****

                             but will be mixed on top later, i will add 2 ** starts for what is new





                            1_ )    ADD A NEW TEACHER  and a route respectively, 
                            this new route will have a POST request method.

                            this NEW TEACHER wont be added in the old way but instead you will add him/her
                            here:    
                            
                            res.json({

                              name:"Hadi",
                              id: 9
                            });
                            
                            
                            
                            
                            


*/

// Post request ** NEW!!

app.post("/teachers", (req, res) => {
  console.log("Post teachers route called");
  res.json({
    name: "Hadi",
    id: 9,
  });
});

// KILL PROCESS old process:     lsof -ti :5000 | xargs kill
