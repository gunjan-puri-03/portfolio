const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected - db.js:7");
  } catch (error) {
    console.error("❌ MongoDB Connection Error: - db.js:9", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;