##### ROUTE HANDLERS RECAP

##### stuff to have in the dependencies

```javascript
// express
npm i express

// scripts
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "killnode": "lsof -ti :5000 | xargs kill "
  },
```

```javascript
//REMEMBER

var express = require("express");
var router = express.Router();

const {
  getAllUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");

// GET ALL RECORDS on route /records
router.get("/", getAllUsers);
//***** this is the ROUTE HANDLER or THE CONTROLLER *******

//
// GET A SPECIFIC RECORD on route /records/:id
router.get("/:id", getUser);
//
//
// -----------
//CREATE A RECORD on route /records
//
router.post("/", addUser);

//
//
// -----------
//
//
// UPDATE A RECORD on route /records/:id
//
router.patch("/:id", updateUser);
//
//
// -----------
//
// DELETE A RECORD on route /records/:id
//
//
router.delete("/:id", deleteUser);

//
//
// -----------
//
module.exports = router;

/*






----------- userscontrollers.js

what is the model?


exports.getAllUsers = (req,res) => {
  let users = db.get("users).value()
  res.send(users);
}

this is the part that connects me to my DATA
db.get("users)

the "db" is the data base connector, 



------------





*/
//this is a Middleware
app.use(express.json());
// this will parse all the incoming requests
```
