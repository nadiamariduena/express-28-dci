const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//

//
// the controller
const sayHello = (req, res) => {
  res.send({ mess: "Welcome HELLO sssssSTEVEEE" });
};

const getAllUsers = (req, res) => {
  const users = [
    {
      id: "0",
      name: "Stevedd",
      email: "steveed@blah.com",
    },
    {
      id: "1",
      name: "Nahla",
      email: "nahla@blah.com",
    },
    {
      id: "2",
      name: "Cloud",
      email: "cloud@blah.com",
    },
  ];

  res.send(users);
};

//
//POST : create
//Get  : read
//Put  : Update/Replace
// Patch : Update/Modify
// Delete : Delete
//
//
//
// ***  ROUTES ***
app.get("/", sayHello);
//GET:  If the user wants to make a request on all the users, you use GET
app.get("/users", getAllUsers);
/**

 */
