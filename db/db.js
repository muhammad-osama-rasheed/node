const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/portfolio";

// Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error: ", error);
  });

// // Listen to MongoDB connection events
// const db = mongoose.connection;

// // When connected to MongoDB
// db.on("connected", () => {
//   console.log("MongoDB connection established successfully");
// });

// // When error occurs during connection
// db.on("error", (err) => {
//   console.error("Error connecting to MongoDB:", err);
// });

// // When MongoDB disconnects
// db.on("disconnected", () => {
//   console.log("MongoDB Disconnected!");
// });
