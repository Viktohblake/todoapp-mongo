 const express = require('express');
 const { json } = require("express");
 const bodyParser = require('body-parser');
 const connectDB = require('./db/app.js');
 const routes = require('./routes/todoRoute');
 require('dotenv').config(); // allows us to use the environmental variables in .env
 const { PORT } = process.env;
 
 // connect to db
 connectDB();
 
 // initialise express
 const app = express();
 
 // initialise express middleware
 app.use(express.json({extended: false}));

 // middleware to convert our request data into JSON format
 app.use(bodyParser.json());

 // create routes
 app.use(json(), routes);
 
 // create a basic express route
 app.get('/', (req, res) => res.json({message: "Welcome to My TodoApp"}));
 
 // port
 const port = process.env.PORT || PORT;
 
 // listen to connection
 app.listen(port, () => console.log(`app running on port ${port}`));