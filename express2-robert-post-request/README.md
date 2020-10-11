## EXPRESS 2)\_ "POST REQUESTS"

#### °°------- This project is a continuation of the "Teachers app" --------°°

<br>
<br>

#### 1)\_

##### \* ADD A NEW TEACHER and a route respectively

<p>                            this new route will have a POST request method.

<br>
<br>

This NEW TEACHER wont be added in the old way but instead you will add him/her
here:

</p>

```javascript
// Post request ** NEW!!

app.post("/teachers", (req, res) => {
  console.log("Post teachers route called");
  res.json({
    name: "Hadi",
    id: 9,
  });
});
```

#### 2)\_ Create a new folder and a file

<p>                            create a Folder and Name it:

UI

</p>

<br>

<p> 
Create a file inside the UI folder:
teacher_add.html

</p>

#### 3)\_ ADD the form inside the: teacher_add.html file

```javascript
  <h1>Add this Teacher</h1>
//
//
    <form action="">
      <div><label for="">Name</label><input type="text" /></div>
      <button>Add</button>
    </form>

```

#### 4)\_ Go to the server and add a Route to connect with the form

```javascript
app.get("/teachers/add", (req, res) => {});
```

###### Explanation

```javascript
/*
                             ** The form exercise is just for test, as you rarely use this in that way **





                            How should i serve the form i just added ? 

                            You will start by providing another Route
                            
                            Express has a special function call:
                       **      res.json , res.send  and   res.sendFile
 
                            With res.sendFile you dont have to import it on the Top and then requiring it,
                            because res.sendFile is already grabbing the file from the folder, a bit like
                            when you grab  the url img in scss.

                            SO after you added the new ROUTE connected to the add html like so:

                            app.get("/teachers/add", (req, res) => {

                                  console.log("teacher form called ");
                               
                            res.sendFile("./ui/teacher_add.html");   // grabbing the form
                            });



                            TEST IT HERE:
                            http://localhost:5000/teachers/add


                            One of the reasons you dont have anything(blank page) on the browser is because there is an
                            ERROR!!!! the error firstly come due to a conflict with another ROUTE in this file
                            (line 52:     app.get("/teachers/:id")  //check the server.js
                            
                            the problem resides in the fact that **
                            there are two Routes now using the GET method and what is happening is
                            that EXPRESS is executing the first route with the GET it finds when checking the 
                            server.js file


                            To solve this problem you will have to relocate the ROUTE with the add
                            ,above the Route with:  app.get("/teachers/:id" in line 52 like so:


                           

                                                app.get("/teachers/add", (req, res) => {
                                             
                                                });



                                                //  Single Teacher

                                                app.get("/teachers/:id", (req, res) => {
                                                
                                                });

                            
  

                            After i relocated the route there will be another problem, this time the
                            error will say:

                            TypeError: path must be absolute or specify root to res.sendFile

                            to give an absolute path (point to your project route )
                            you will use the following:

                            __dirname YOU have to delete the dot here: ("./ui/teacher_add.html");

                            the problem with the dot is that res.sendFile requires an absolute path

                          and the dot dont work with res.sendFile thats why you hate to use the __dirname
  */

res.sendFile(__dirname + "/ui/teacher_add.html");
// res.sendFile  serves to send data
// res.sendFile("./ui/teacher_add.html");  this was before the changes
```

<br>
<br>

### :balloon: IMPORTANT !!

##### POST REQUEST with FETCH

###### in the world of API's when you receive a REQUEST you have to always STATE what is inside of it , otherwise the API will refuse the packet

```javascript

        let teacherName = form.name.value;
        //
        //
        //
        //  ****  POST call to backend   ****
        // POST REQUEST with FETCH
        //
        fetch("http://localhost:5000/teachers", {
          method: "POST", //1
          //In the header you have to state what is inside, type for example
          headers: {
            //2
            // the type is JSON, Json refers to the body of what is inside of the parcel
            "Content-type": "application/json",
            // 3 the last is the DATA itself
            // here you will send the data, but you have to declare this data before the FETCH in a variable:       let teacherName = form.name.value;
          },

          /********
             method: "POST"


          in the world of API's when you receive a REQUEST you have
          to always STATE what is inside of it , otherwise the API
          will refuse the packet

          *******/
          /*  the 400 error bad request after you added this in the

        server.js : app.use(express.json());

         is corrected with stringify, the problem is due that the browser
         dont recognize that kind of data because the browser
          only recognize strings therefore you need to convert or
          stringify the data you send out there
          */

          body: JSON.stringify({ name: teacherName }),
          //before the stringfy body: { name: teacherName },

          /*
 body: JSON.stringify({ name: teacherName }),

Json data we want to send to a backend always needs to be send
as a STRING over the wire , the backend will parse that string
 into an javascript object



*/


// server.js


// MIDDLEWARE
/*

with the following you ask express
if there is any JSON data in the body ,and if
so please store it in => req.body

app.use(express.json());

So it takes the incoming body STRING, parses the JSON inside
and stores the data in => req.body


*/
//
app.use(express.json());
//

app.post("/teachers", (req, res) => {
  console.log("Post teachers route called");
  console.log(req.body);
  //this is the data that the frontend SENT to us

  res.json({
    name: "Hadi",
    id: 9,
  });
});

```

<br>
<br>

#### :balloon: ADD the RESTED extension to test the backend

![rested](/img/rested_preview.jpg)

<br>
<br>

<p>Select the method you want: POST , GET etc then type the type of content in the Headers, then select the type, add the name and then the name of one of the teachers in the list of teachers, click send request</p>

<br>
<br>

![rested gif](/img/rested-anim.gif)

<br>
<br>
<br>

## °°------- installation | dependencies --------°°

### 1)

<p>Install Nodemon too but unless you already have it ignore this </p>

```javascript


npm init

npm i express

npm i -g  nodemon


```

<br>
