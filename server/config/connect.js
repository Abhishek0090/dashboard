const mongoose = require("mongoose");

export function connectToDatabase() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://localhost:27017/myDatabase", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB database");
        resolve();
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        reject(error);
      });
  });
}
 