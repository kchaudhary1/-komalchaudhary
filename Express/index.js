// Import our libraries and set up express.
const express = require("express");
const morgan = require("morgan");
//Initializing Express
const app = express();

// app.use allows for different middleware to be brought into Express
// Morgan: a logger for express so that we have a record for debugging.
app.use(morgan("dev"));
app.use(express.json());

// Create the page router for express that recognizes and directs our URLs.
const indexRoute = express.Router();

// Example express configuration for our /apis/ route.
indexRoute.route("/").get((request, response, next) =>{
    return response.json({status:200 });
})

const doSomethingFirst = () => {
    console.log('request')
}

const handleRequest = (request, response, next) => {
    return response.json({status:200, data: 'this is some data'})
}

const doSomethingFirst =(req, res, next) => {
    console.log('request', req.headers)
    next()
}
indexRoute.route('/data').get(doSomethingFirst, handleRequest)
// Setting Main Route
app.use("/apis", indexRoute);

//app.listen declares what port the Express application is running on
app.listen(4200, ()=>{console.log('express successfully built')});