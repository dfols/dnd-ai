import mongoose from "mongoose";

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    // Already connected
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  // Connect to MongoDB using Mongoose
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.MONGODB_DB, // Specify the name of the database using dbName option
  });

  isConnected = true;

  // Optional: Print a message when successfully connected
  console.log("Successfully connected to MongoDB using Mongoose");
}
