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

<br>
<br>

<hr>

<br>
<br>

## :bee: :bee: refreshing javascript to understand it a bit better :bee: :bee:

<br>
<br>

### .map()

<p>

Let me explain how it works with a simple example. Say you have received an array containing multiple objects – each one representing a person. The thing you really need in the end, though, is an array containing only the id of each person.
// What you have

</p>

```javascript
var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
// What you need
[20, 24, 56, 88];
```

<p>
There are multiple ways to achieve this. You might want to do it by creating an empty array, then using .forEach(), .for(...of), or a simple .for() to meet your goal.
Let’s compare!

</p>

```javascript
.forEach():
var officersIds = [];
officers.forEach(function (officer) {
officersIds.push(officer.id);
});
```

<p>
Using 
Notice how you have to create an empty array beforehand? 
Let’s see what it looks like when using .map():
</p>

```javascript
var officersIds = officers.map(function (officer) {
  return officer.id;
});
```

<br>
<br>

## .filter()

<p>

What if you have an array, but only want some of the elements in it? That’s where .filter() comes in!
Here’s our data:

</p>

```javascript
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];
```

<p>

Say we want two arrays now: one for rebel pilots, the
other one for imperials. With .filter() it couldn’t be easier!

</p>

```javascript
var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});
var empire = pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});
// That’s it! And it’s even shorter with arrow functions:
const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
const empire = pilots.filter((pilot) => pilot.faction === "Empire");
```

<br>
<br>

### .reduce()

<p>

Just like .map(), .reduce() also runs a callback for each element of an array. What’s different here is that reduce passes the result of this callback (the accumulator) from one array element to the other.
The accumulator can be pretty much anything (integer, string, object, etc.) and must be instantiated or passed when calling .reduce().
Time for an example! Say you have an array with these pilots and their respective years of experience:

</p>

```javascript
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];
```

<p>

Notice that I’ve set the starting value as 0. I could have also
used an existing variable if necessary. After running the callback
for each element of the array, reduce will return the final value of our
accumulator (in our case: 82).

Let’s see how this can be shortened with ES6’s arrow functions:

</p>

```javascript
const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
```

<p>

Now let’s say I want to find which pilot is the most experienced one. For that,
I can use reduce as well:

</p>

````javascript
var mostExpPilot = pilots.reduce(function (oldest, pilot) {
return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
```
````
