const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

 // async mongoose connection
 const connectDB = async () => {
     try {
         await mongoose.connect(MONGO_URI, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
         });
 
         console.log('MongoDB connected...');
 
         // seed data
     } catch (err) {
         console.error(err.message);
 
         // exit with failure
         process.exit(1);
     }
 }
 
 module.exports = connectDB;