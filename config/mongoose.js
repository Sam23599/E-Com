const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config(); 

const atlasConnectionString = process.env.MONGO_URI || 'mongodb://localhost:27017';

mongoose.connect(atlasConnectionString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once('open', ()=>{
    console.log('Mongoose Connected');
})

module.exports = db;