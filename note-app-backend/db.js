    // const mongoose = require("mongoose")
    // require("dotenv").config()
    // const connection = mongoose.connect(process.env.mongoUrl)

    // module.exports = {
    //     connection,
        
    // }

    const mongoose = require("mongoose");

// Load environment variables from .env file
require("dotenv").config();

// MongoDB connection URI
const mongoURI = "mongodb+srv://barindersingh1997:11223344@cluster0.zzxtw7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
const connection = mongoose.connect(mongoURI);

// Export the connection
module.exports = {
    connection
};
