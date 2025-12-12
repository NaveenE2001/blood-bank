const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://naveen:naveen@newcluster."
const connectToMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
