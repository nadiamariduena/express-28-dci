## Database intro (sending requests)

                              # First steps

<br>

#### installation | dependencies etc

<p>I dont need to create a record store because this is just my lessons, but it serves
for the record store purpose</p>

### 1)

```javascript
mkdir lc-record-store

cd lc-record-store

git init

npm init



```

<ul>
<li>1)_ mkdir... create the folder project </li>
<li>2)_ cd lc-record... go into the create folder project</li>
<li>3)_ git init... connect to the github repository for this project</li>

<li>4)_ npm init... initialize the package.json  ,there you will add the dependencies you need for the project </li>
</ul>

<br>

### 2)

<br>

#### after you installed the package.json, add the "dev" to the scripts

```javascript
 "scripts": {
    "dev": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"

  },

```

<br>

### 3)

<br>

#### Create a file inside the vs: app.js

<p>Inside of it type the following: </p>

```javascript
console.log("I am a test bird");
```

<br>

### 4)

<br>

#### Once you console.log that, run the following on the console, to see if it s working:

```javascript
npm run dev

```

<!-- by typing colons without typing enter, it will show you an array of emojis  -->

<br>

### 4)

<br>

##### result 👍

```javascript
> node app.js

hello i want to go to Kiwi land

```

<br>

### 5)

<br>

## Express :blossom:

#### After testing and if it worked add express :blossom:

```javascript
npm i express

```

<br>
<br>

### 6) Once you have installed express, go to the following link

<a href="https://expressjs.com/en/starter/hello-world.html" target="_blank"></a>

### Copy the follwing for that page and paste it to the app.js(replace the console log for this new data)

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

<br>
