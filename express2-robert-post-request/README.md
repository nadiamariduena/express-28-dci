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

#### 2 Create a new folder and a file

<p>                            create a Folder and Name it:

UI

</p>

<br>

<p> 
Create a file inside the UI folder:
teacher_add.html

</p>

#### 3 ADD the form inside the: teacher_add.html file

```javascript
  <h1>Add this Teacher</h1>
//
//
    <form action="">
      <div><label for="">Name</label><input type="text" /></div>
      <button>Add</button>
    </form>

```

#### 4 Go to the server and add a Route to connect with the form

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


                            
  
  
  */
```

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
