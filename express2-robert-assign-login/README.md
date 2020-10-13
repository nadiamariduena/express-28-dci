## EXPRESS 2)\_ "POST REQUESTS"

#### °°------- ASSIGNMENT | Login using requests--------°°

##### this project was created by Vasilis and i will copy it here to have an example of the login.

<br>
<br>

##### I commented what i understood, but most of the LOW DB was confusing, i think having 2 different ways of doing something in the same day is contre productive.

```javascript
const login = (e, form) => {
  e.preventDefault(); //to stop the mess when handling forms

  console.log("submit");
  let username = form.username.value;
  let password = form.password.value;

  console.log(username);
  console.log(password);
  //
  //  ****  POST call to backend   ****
  // POST REQUEST with FETCH
  /*
          method: "POST"


                    in the world of API's when you receive a REQUEST you have
                    to always STATE what is inside of it , otherwise the API
                    will refuse the packet

    */
  //
  fetch("http://localhost:5000/login", {
    method: "POST", //1
    //In the header you have to state what is inside, type for example
    headers: {
      //2
      // the type is JSON, Json refers to the body of what is inside of the parcel
      "Content-Type": "application/json",
      // 3 the last is the DATA itself
      /* here you will send the data, but you have to declare
              this data before the FETCH in a variable:

                        let username = form.username.value;
                        let password = form.password.value;

               */
    },
    body: JSON.stringify({ username: username, password: password }),
  }).then((res) => res.json().then((data) => console.log(data)));

  //   FORGOT "THEN"

  // .then((res) => res.json().then((data) => console.log(data)));

  /*
                the 400 error RELATED

       server.js : app.use(express.json());

         is corrected with stringify, the problem is due that the browser
         don't recognize that kind of data because the browser
          only recognize strings, therefore you need to convert or
          stringify the data you send out there.




*/
};
```

<br>
<br>
<br>

### TO PREVENT

##### When you just install low db and express, you will notice that when you want to start the server, there s an endless loop, to prevent this:

<p>Go to the package json and replace the following </p>

```javascript

// before
"dev": "nodemon  server.js",
// after
  "dev": "nodemon -e js server.js",
```

##### after replacing that type:

```javascript
npm run dev

// You will notice that a file db.json will be automatically created.
```

<br>

<br>
<hr>
