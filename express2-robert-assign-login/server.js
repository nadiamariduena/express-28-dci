const express = require("express");
const app = express();
const port = 5000;

//
//
//

const low = require("lowdb"); //library
//
const FileSync = require("lowdb/adapters/FileSync");
// Filesync is like some class
//
// setting up the connection to the library
const adapter = new FileSync("./data/db.json");
// FileSync("./data/db.json"); here you are parsing the data
const db = low(adapter);
// then you pass this adapter (line 15), to the low db packet:  const db = low(adapter);

//
//
//related to  const port = 5000;
app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});
//
//
//
/* 

db.defaults({
  users: [
    {
            id: "01",
        name: "hello",
      email: blah@gmail.com
}
  ],
}).write(); 


this db.defaults is only executed when the file doesnt exist,
 but if you added data 
 inside the square brackets like the teachers names for
  example, you will 
 have to delete the data/db.json as you now have data here.
 
 */
db.defaults({
  users: [],
}).write(); //if i remember well the write has to do with the rules: write read ...

app.use(express.json()); //STRINGIFY related in login.html

let users = [
  { username: "User1", password: "PW1" },
  { username: "User2", password: "PW2" },
  { username: "User3", password: "PW3" },
];

app.get("/", (req, res) => {
  res.send("it is working");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/client/login.html");
  // __dirname YOU have to delete the dot here , if you use this __dirname: ("./ui/teacher_add.html");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  // 1 checking if the user and pass is correct ...then
  let exist = users.find((item) => {
    return (
      item.username === req.body.username && item.password === req.body.password
    );
  });
  console.log(exist);
  // 2 launching responses depending of the outcome
  if (exist) {
    res.send({ message: "Login successful" });
  } else {
    res.send({ message: "Login failed" });
  }
});

//  exercise 2

app.post("/users", (req, res) => {
  const user = req.body;

  user.id = Date.now().toString();

  db.get("users").push(user).write();
  res.send(user);
});
//
//
//
//
app.get("/users", (req, res) => {
  let users = db.get("users").value();
  res.send(users);
});
//
//
//
//
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const singleUser = db.get("users").find({ id }).value();
  console.log(singleUser);
  if (singleUser) {
    res.send(singleUser);
  } else {
    res.send({
      message: "no user with this id",
    });
  }
});
//
//
//
//
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  const updatedUser = db.get("users").find({ id }).assign(userData).write();
  res.send(req.body);
});
//
//
//
//
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.get("users").remove({ id }).write();
  res.send(id);
});
