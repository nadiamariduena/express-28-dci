// console.log("hello i am a birdooo");

const express = require("express");
/*          express is a huge object that contains other 
            methods, methods you will use by "requiring" them. 

            THE MAIN idea in EXPRESS

            With Express you pretty much select what you want 
            to deal with, for example:

            if you want to deal with the GET, POST , put , delete...
            YOU GET those ready made methods, and in those methos you PASS
            a PATH and a call back, all the call backs in express give you
            many options but 3 are the most important:

            -- The req, like the request that came from the client
             Lets say somebody makes a request, we send back a string of data
            -- the res or response, that you will send back, after you form into
            something and then send it back,like so:

            res.send("Hello World! yeahhh blah ffff");

                            you can also send back an OBJECT like so:

         
                and   you can also send back an array of OBJECTS like so:


                app.get("/", (req, res) => {
                    res.send([
                                {
                                mess1: "hello1 i am an array of objects",
                                },
                                { mess2: "hello2 i am an array of objects" },
                            ]);
                        });


                                        ----------

            and it also give you to something called NEXT which as METHOd that
            call the next callback/middleware as you can have many callbacks, 
            for example:

            This is call back METHOD 

              app.get("/",  sayHello);


              const sayHello = (req, res, next) => {
                  res.send({mess: "Hello World"})
              }

HERE IT WILL CALL THE NEXT



           

            */
const app = express();
const port = 3000;

//
// You position the sayHello above the callback app.get("/", sayHello); ...
// because you have to INITIALIZE it first
const sayHello = (req, res, next) => {
  next();
  //   if you dont send back a response, like the one below, it will lead forever
};
const yellSteve = (req, res, next) => {
  res.send({ mess: "HELLO STEVEEE" });
  //   if you dont send back a response, like the one below, it will lead forever
};
//
//
// call back 1 with just one argument/method, here is the second: yellSteve
app.get("/", sayHello, yellSteve);

//
//
//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// https://expressjs.com/en/starter/hello-world.html

/**
original



         
           const app = express();
           const port = 3000;
           
           app.get("/", (req, res) => {
             res.send([
               {
                 mess1: "hello1 i am an array of objects",
               },
               { mess2: "hello2 i am an array of objects" },
             ]);
           });
           
           app.listen(port, () => {
             console.log(`Example app listening at http://localhost:${port}`);
           });



 */
