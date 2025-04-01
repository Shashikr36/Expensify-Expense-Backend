const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`MongoDB Connection Error: ${error.message}`.bgRed);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb;
