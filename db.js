const mongoose = require("mongoose");

// Define the MongoDB connection URL
const MongoURL = "mongodb://localhost:27017/hotels";

// Set up MongoDB connection
mongoose.connect(MongoURL);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
    console.log("MongoDB connection error", err);
});

db.on("disconnected", () => {
    console.log("MongoDB connection is disconnected");
});

// Export the db connection
module.exports = db;
