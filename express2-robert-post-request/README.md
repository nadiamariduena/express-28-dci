## Database intro

# First steps

<br>

## °°------- installation | dependencies --------°°

<p>Express intro Recap with Robert</p>

### 1)

<p>Install Nodemon too but unless you already have it ignore this </p>

```javascript


npm init

npm i express

npm i -g  nodemon


```

<br>

### 2 Warning!! never upload the data into the github without adding before the .gitignore, as you will be exposing the node_modules/

<br>

### 3 add the scripts

```javascript

"scripts": {
  // later you will replace this, so that you don't  update it all the time.
  "dev": "node server.js",
  //
  //
  "test": "echo \"Error: no test specified\" && exit 1"
},

```

## At this point if you check the server with this, but its not going to work:

<!-- try command + strg plus v , it will open another tab in vs that will help you visualize the readme  -->

```javascript
/* this goes inside the server.js file but its
just an example of what not to do,as you
require info DIFFERENTLY here*/

import express from "express";

//  this goes in the terminal, and there
// you will check the result
node server.js

```

## 4 To make it work you have to replace the above for the following:

```javascript
const express = require("express");
```

## 5 Now type npm start to test it, dont forget that the scripts should look like this:

```javascript
  "scripts": {
    "dev": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  }
}
```

## To install nodemon you can either type npm i nodemon or copy the dependencies from the other intro server express and paste it here, then type npm i , to install them all!! :bat:

### Type the following to init the server:

```javascript
const express = require("express");
const app = express();

const port = 5000;

// (()=> {})  callback function
app.listen(() => {
  console.log(`Started server on port ${port}`);
});
```

### Now type npm start to see if it s working(on the console)

#### result

```javascript
express-intro-robert_1
> node server.js

Started server on port 5000

```

### After starting the server, you will type on the browser localhost:5000

<p>
Its going to show an error, and that is because there s an error related to the LISTENING, the issue 
comes from the fact that i didnt call the port inside the callback here: </p>

```javascript
app.listen(() => {
```

<p>
So what i have to do is to provide the PORT i am "listening" on </p>

```javascript
app.listen(port, () => {
  // listening is opening aport in our machine
  console.log(`Started server on port ${port}`);
});
```

<br>

![preview](/img/preview1_cannot_get.jpg)

<br>
<br>

## °°---------------- Routes ----------------°°

<br>
<br>

### Routes work like the Mall analogies Robert used,

<p>
In the shopping mall you have different stores:

Each of this stores has a unique specialization like (books,shoes,paper) and each of them has an unique address (like floor, number etc), and this is equivalent to a PORT. Inside of a port there s always a distinct
service on your pc that does something very specific, for example: you have different PORTS to listen to incoming EMAILS, different ports for accepting a file
load etc...

Each specialized store on the server has its own address, this
are the programms that run on the server </p>

## After you add the code below, you will notice that its not going to update anything in the browser

<p>And that is because you started the server when there was no route(the code below) and now that its added, the server is not taking care of it, so you have to RESTART the server. There s a trick to avoid restarting it all the time</p>

```javascript
app.get("/teachers", (req, res) => {
  console.log("Route /teachers called");
  Response.send("<h1>Hello from teachers</h1>");
});
```

#### :bee: There s a trick to avoid restarting it all the time...

<p>Type nodemon but before that go to the json packet and add the following:</p>

```javascript

  "scripts": {
    "dev": "nodemon server.js", //replace node by nodemon
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

<p>This will prevent you from restarting the server all the time, and like that you will see "live updates" of the changes you do on the code</p>

### Now you will use nodemon, but it doesnt work like before

<p>Before you used npm start , now you have to use: </p>

```javascript
npm run dev
```

### To Kill a process :boar:

<p>If you are using a port for example : port 5000 , no other
program can use this port,even if you try to open it in another
Terminal it will continue to cause trouble
<br>
<br>
So there s a way to kill it and restart again
 </p>

### result

```javascript
lsof -ti :5000 //_1_

kill 11801 //_2_

// SHORT WAY

lsof -ti :5000 | xargs kill
// this is the command to do all in 1 line
// ADD THIS in the json for reference
//  "killnode": "lsof -ti :5000 | xargs kill "



```

<br>
<br>

## In the following you will see the array of objects

![preview](/img/preview2a.jpg)

## What can you send? ([{}]) or ([{}]) check the descript below:

```javascript


let teachers = [
  { name: "Joseph" },
  { name: "Bleda" },
  { name: "Benjamin" },
  { name: "Mariam" },
  { name: "Martina" },
  { name: "Navqui" },
  { name: "Vasilis" },
  { name: "Rob" },
];

//  ROUTES
app.get("/teachers", (req, res) => {
  //   console.log("Route /teachers called");
  //   Response.send("<h1>Hello from teachers</h1>");

  console.log("Route /teachers called");
  res.json(teachers);
});




// --------------
// THINGS YOU CAN SEND
// --------------
//
2 type of things you can send:

arrow of objects ([{}])

or

objects like so:

()

when you want to set up a collection of teacher:
you send an arrow of an object like so:

([{}])
```

## To VISUALIZE the Json file in such way you have to download a extension called "Json viewer" , once you have installed it:

<p>You will be able to visualize the JSON file in the mode you wish</p>

![preview](/img/preview3.jpg)

<br>
<br>

## SET up a route for a Single Teacher :duck:

```javascript
// SET up a route for a Single Teacher
// ADD a unique key ID for each teacher, so to browse on them later

app.get("/teachers/:id", (req, res) => {
  console.log("Requested single teacher");
  res.json({ name: "Rob", id: 8 });
});
```

<br>

##### Check it on the browser: localhost:5000/teachers/45

<p>To this point doesnt matter what i type, it will always show: </p>

```javascript
//AFTER TYPING: localhost:5000/teachers/45
{

          name: "Rob",
          id: 8

};

```

<br>

### How can i now access this parameter id: in my Route ?

```javascript
//ADD the console.log("params sent to us", req, params); to check on the browser console.
app.get("/teachers/:id", (req, res) => {
  console.log("Requested single teacher");
  console.log("params sent to us", req.params);
  res.json({ name: "Rob", id: 8 });
});
```

### The result has to be checked differently

<p>as its backend and its not going to show like normally so NO BROWSER console to check this result, you have to use the terminal of the app</p>

#### type localhost:5000/teachers/50 and check the terminal

<p>You will see on the bottom that number, so now you see that your request is being shown in such way</p>

![preview](/img/preview4.jpg)

<br>
<br>
<br>

### How to exit the ID from the params ?

```javascript
console.log("params sent to us", req.params);
res.json({ name: "Rob", id: 8 });
```

<br>

## To reach out the id from the req.params object, you have the following 3 options:

```javascript
req.params.id;
req.params[id];
const { id } = req.params;
```

##### I will use the following for now:

```javascript
const { id } = req.params;
```

##### add it to the code

```javascript
app.get("/teachers/:id", (req, res) => {
  console.log("Requested single teacher");
  console.log("params sent to us", req.params);

  const { id } = req.params; //     ***
  console.log(`ÌD sent to us: ${id}`);

  res.json({}); //if you dont add a response here ,
  /*  the browser will show a white page, at least
    put a {} and then type a ID number to the localhost  */
});
```

<br>
<br>
<br>

### Now how do i reach out the teacher with the ID , from the ARRAY?

<p>You have to browse between the data for each user / id</p>

```javascript
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
```

<p>POSSIBILITIES for that:</p>

```javascript

for

find

filter

map

forEach

```

<br>

##### When do we use map?

<p>

Map will be used, when I want to convert the whole array to a different form, when we want to touch every single item and change
every single item or few of them

</p>

##### for Loops?

<p>for loops for this kind of  things is used rarely,because
there are more specialized methods to deal with arrays

</p>

##### for Each?

<p>for Each is used mostly for multiple items, and also when you
dont want to convert every single item, you just want to do something maybe in not all items or just few.

</p>

##### When do we use find or filter?

<p>
So whenever we want to filter out something with just one result
, we can use filter or find, BUT THERE IS A DIFFERENCE

</p>

##### Find

<p>
"FIND" will stop the research when it will find the first item with lets say a name, if i want to find a tomato in an array with oranges
and several tomatoes, FIND will give me the first tomato and then stop the research.
</p>

##### Filter

<p>
FILTER will give me/find all the tomatoes of the array and make an
array out of all the tomatoes it found.

</p>

<br>
<br>
<br>

#### SO lets find the teacher with FILTER

```javascript
app.get("/teachers/:id", (req, res) => {
  console.log("Requested single teacher");
  console.log("params sent to us", req.params);

  const { id } = req.params;
  console.log(`ÌD sent to us: ${id}`);

  //So this is the statement to find a teacher
  //

  /* now with "find" it will loop over every single entry
     so for every single teacher in this array , i will make 
     this  check:
     
   teacher.id == id); and the first check that turns TRUE, 
   that teacher then will be returned
  */

  let teacher = teachers.find((teacher) => teacher.id == id);

  //never do the following: teacher.id = id);

  /*   If you notice in line 491 there are 2 equals, 
  if you only put one, you will be assigning 
  instead of checking */

  res.json(teacher);

  // res.json({}); //if you dont add a response here ,
  //   the browser will show a white page, at least put a {} and then type a ID number to the localhost
});
```

### EXPORT THE ARRAY OF TEACHER to a data.js

```javascript
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
// Commun Js
module.exports = teachers;

// // Es6
// export default teachers;
```

### Require it inside the server.js

```javascript
const teachers = require("./data");
//
/* careful when requiring, if you do it like 
 this ("data.js") ,it will understand that you want to check 
 the library and not the data.js file */
```
