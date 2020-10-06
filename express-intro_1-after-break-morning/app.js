const express = require("express");

const app = express();
const port = 3000;
const { getAllUsers } = require("./userMethods");
//
//
//

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//

//
// the controller
const sayHello = (req, res) => {
  res.send({ mess: "Welcome HELLO sssssSTEVEEE" });
};

// ***  ROUTES ***
app.get("/", sayHello);
//GET:  If the user wants to make a request on all the users, you use GET
app.get("/users", getAllUsers);

/*
















            ***        BEFORE CLEANING and 
                    putting the USER methods in another file  ***



                    ## Database intro (sending requests)

</br>
</br>

### check the no.1 of this project to have more info about the dependencies etc

<p>If the new project of the same app dont work , will the process on the port you are using, like so:</p>

```javascript

sudo kill -9 $(sudo lsof -t -i:3000)
```

<a href="https://tecadmin.net/kill-process-on-specific-port/" target="_blank"> Kill Process on Port </a>

</br>
</br>

#### Make a request, type the following on the browser:

```javascript

http://localhost:3000/users
```

</br>

```javascript
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
```

```javascript
[
  { id: "0", name: "Stevedd", email: "steveed@blah.com" },
  { id: "1", name: "Nahla", email: "nahla@blah.com" },
  { id: "2", name: "Cloud", email: "cloud@blah.com" },
];
```



 */
