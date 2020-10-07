const express = require("express");
const data = require("./data");
const app = express();
const port = 5000;

const list = data
  .map((item) => {
    // For every single ITEM i need to return
    // Si dans les items se trouve qqch qui resemble a "Data Server" si c est vrai, ajoute la couleur green et le fontfamily arial
    return item === "Data Server"
      ? `<h5 style="font-family:arial; color: green;"><li>${item}</li></h5>`
      : `<li>${item}</li>`;
  })
  .join("");

//

//
//
//
//
//
// __ To start the server type on the browser localhost:5000 or 3000 etc
// __ npm run dev or nodemon server.js
// __ to kill :   lsof -ti :5000 | xargs kill

app.listen(port, () => {
  console.log(`Start on port ${port}`);
});

//
//
app.get("/", (req, res) => {
  console.log("Route with the data call");
  res.send(data);
});

//bonus , will leave space with string: const text = data.join(", ");
// This is like the paths in react, you have to type: http://localhost:5000/text to see what is going on in this path
app.get("/text", (req, res) => {
  const text = data.join(", ");
  console.log("Route with string");
  res.send(text);
});

//bonus html list
// This is like the paths in react, you have to type: http://localhost:5000/html to see what is going on in this path

app.get("/html", (req, res) => {
  console.log("Route with html list");
  res.send(list);
});

/*



const express = require("express");

const data = require("./data");

const app = express();

const port = 5000;

const list = data
  .map((item) => {
    // here you will map through the items on the data,js

// óption
// here you will map through the items on the data,js
//.map((item) => {
// if (item === "Data Server") {
//  return  <li>${item}</li>;
// } else {
//   return <li>${item}</li>;
// }}).join("")


    // item === "Data Server" ? `<li>${item}</li>` : `<li>${item}</li>`;
  })
  .join("");

//
//
//
//
//
// __ To start the server type on the browser localhost:5000 or 3000 etc
// __ npm run dev or nodemon server.js
// __ to kill :  killnode": "lsof -ti :5000 | xargs kill

app.listen(port, () => {
  console.log(`Start on port ${port}`);
});

//
//
app.get("/", (req, res) => {
  console.log("Route with the data call");
  res.json(data);
});

//bonus , will leave space with string: const text = data.join(", ");
app.get("/text", (req, res) => {



The join() method returns the array as a string.

The elements will be separated by a specified separator. The default separator is comma (,).





  const text = data.join(", ");
  console.log("Route with string");
  res.json(text);
});

//bonus html list
app.get("/html", (req, res) => {
  console.log("Route with html list");
  res.send(list);
});





*/
