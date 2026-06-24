const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/todo";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Fail fast if cannot connect
};

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, options);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit process if connection fails
  }
}

module.exports = connectDB;
