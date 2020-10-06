## EXPRESS intro

<br>

#### installation , dependencies etc

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
<br>

#### after you installed the package.json, add the "dev" to the scripts

```javascript
 "scripts": {
    "dev": "node app.js",
"test": "echo \" Error\" && exit  1"
  },

```

<br>
<br>

#### Create a file inside the vs: app.js

<p>Inside of it type the following: </p>

```javascript
console.log("I am a test bird");
```

#### Once you console.log that, run the following on the console, to see if it s working:

```javascript
npm run dev

```

<hr>
