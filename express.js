// Mason Haines & Samuel Mouradian 7/9/2025

const express = require('express');
const fs = require('fs');
const cors = require('cors'); // import CORS for cross-origin requests
const path = require('path');


const app = express();
app.use(express.json());
app.use(cors()); // enable CORS for all routes
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

 // Request to server from client for some data 
 // app.get("URL",(req,res)=>{})
app.get("/token", (request, response) => {
    const jData = fs.readFileSync('token.json'); // Read the token.json file
    const tokenData = JSON.parse(jData); // Parse the JSON data to js object 

    console.log("GET Request Successfull!");

    response.json(tokenData);
	
})

app.post("/token", (request, response) => {
    fs.writeFileSync('token.json', JSON.stringify(request.body, null, 2)); // Write the request body to token.json

	console.log("TOKEN POST REQUEST SUCCESSFUL");
	console.log(request.body);

	response.send(`PINGED from ${request.body.user};`);
})

app.get("/", (request, response) => {
    console.log("new Browser connected.");
    response.send("Browser Connected... at " + PORT);
});