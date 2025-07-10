// Mason Haines & Samuel Mouradian 7/9/2025

const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

// let token = {user: userName, browser: browserName};

// creates a JS object {user: name, browser: name} on Client
function setToken(name) 
{

}

// writes a token from Client as a JSON file on the Server
function putToken(token) 
{

}

// reads the JSON file on the Server, returns a JS token to the Client
function getToken()
 {

 }