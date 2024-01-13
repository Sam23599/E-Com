const mongoose = require('mongoose');

const atlasConnectionString = 'mongodb+srv://satyamvirat:aWFV3ZE3ONkn0EdD@cluster0.padu6zb.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(atlasConnectionString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once('open', ()=>{
    console.log('Mongoose Connected');
})

module.exports = db;