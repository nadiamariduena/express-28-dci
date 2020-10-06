const users = [
  {
    id: "0",
    name: "üpppppStevedd",
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

//
// You have to put the const users out of the getAllUser method  " exports.getAllUsers = (req, res) =>" as it will not work if you let it inside
//
exports.getAllUsers = (req, res) => {
  res.send(users);
};

// -------
// get user
// --------

exports.getUser = (req, res) => {
  // We want to return the info of the user with the id
  const { id } = req.params;
  const user = users.filter((user) => user.id === id);
  res.send(user);
  //   the below was before i added the filter
  //   res.send({ message: `We will return the info of user ${id}` });
};

/*
https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

.map()
Let me explain how it works with a simple example. Say you have received an array containing multiple objects – each one representing a person. The thing you really need in the end, though, is an array containing only the id of each person.
// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]
There are multiple ways to achieve this. You might want to do it by creating an empty array, then using .forEach(), .for(...of), or a simple .for() to meet your goal.
Let’s compare!
Using .forEach():
var officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});
Notice how you have to create an empty array beforehand? Let’s see what it looks like when using .map():
var officersIds = officers.map(function (officer) {
  return officer.id
});


----------------

.filter()
What if you have an array, but only want some of the elements in it? That’s where .filter() comes in!
Here’s our data:
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
  }
];
Say we want two arrays now: one for rebel pilots, the other one for imperials. With .filter() it couldn’t be easier!
var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});
var empire = pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});
That’s it! And it’s even shorter with arrow functions:
const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");




-----------------
.reduce()
Just like .map(), .reduce() also runs a callback for each element of an array. What’s different here is that reduce passes the result of this callback (the accumulator) from one array element to the other.
The accumulator can be pretty much anything (integer, string, object, etc.) and must be instantiated or passed when calling .reduce().
Time for an example! Say you have an array with these pilots and their respective years of experience:


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
  }
];




Notice that I’ve set the starting value as 0. I could have also 
used an existing variable if necessary. After running the callback 
for each element of the array, reduce will return the final value of our
 accumulator (in our case: 82).



Let’s see how this can be shortened with ES6’s arrow functions:

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

Now let’s say I want to find which pilot is the most experienced one. For that,
 I can use reduce as well:

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});


*/
