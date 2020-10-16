###### CALLING MULTIPLE MIDDLEWARES | MIDDLECHAINNING | 2 example

<br>

```javascript
//----------------  MIDDLEWARE * GENERIC  --------
//
app.use((req, res, next) => {
  console.log(`We called a route ${req.url}`);
  next();
});
//_______________________________________________
//_______________________________________________
//
//

//----------------  ROUTE  *  SPECIFIC --------
//
const getMiddleWare = (req, res, next) => {
  //2
  console.log(`Hello GET, in process to reach destination`);
  next(); //next will help you to reach the destination
};
app.get("/get", getMiddleWare, (req, res) => {
  //1
  //IN THIS LINE : app.get("/get", getMiddleWare, (req, res) => {
  //you can apply as many middleware as you want and coma separates them, check the read me
  res.json({
    message:
      "Hello GET, finally AFTER checking process to reach dest..I reached destination",
  });
});
// ------------------

app.post("/post", (req, res) => {
  res.json({
    message: "Hello World! POST",
  });
});
```

  <br>
    <br>
      <br>
      
#### TO SEE THE RESULT of this

- 1\_ Type the following in the browser: http://localhost:5000/

<p>By doing this you will see in the VS console that a message like this will be shown: "we called a route" , this represents the GENERIC MIDDLEWARE</p>

  <br>

- 2\_ Type the following in the browser: http://localhost:5000/get

<p>By doing this you will see in the VS console that a message like this will be shown: "Hello GET, in process to reach destination" but if you look at the browser you ALREADY have reached the last message which is: "Hello GET, finally AFTER checking process to reach dest..I reached the destination" , this represents one of the SPECIFIC MIDDLEWARE</p>

##### 3\_ Then the post message which is not so important in this example as the generic can take care of this too, but if you want to have suplementary rules for each middleware you can also add it as well.

- type the following in the RESTED in post method: http://localhost:5000/post

<br>
<br>
<br>
<br>

##### In the next example you will see how to add several middlewares in one line.

<p></p>

<br>
<!-- 
![rested](img/) -->
<br>
<br>

<p></p>
<br>

<hr>
<br>
<br>

https://expressjs.com/en/guide/writing-middleware.html - source!
[Express](https://expressjs.com/en/guide/writing-middleware.html)

![image2](./img/middleware-explanatoryimg.jpg)

  <br>
<br>
<br>
<br>

##### 1)\_\_ INSTALL DEPENDENCIES

```javascript
//install :
npm i express
npm i nodemon
/*


 Dont forget to add this "nodemon" otherwise when you will type nodemon server.js , it will
send an error and you will have to kill the server process if you already typed the npm start and start
all over again.

*/

```

<br>
<br>

##### 2)\_\_ snippets | basic template to start the app

```javascript
/*

the SNIPPET : e4-example-Hello
                                            Will give you all this:
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.
------------


```
