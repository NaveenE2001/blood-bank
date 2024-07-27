const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://naveen:naveen@newcluster.sitkzn8.mongodb.net/test";
//bloodbank? try="mongodb+srv://bloodbank?naveen:naveen@newcluster.sitkzn8.mongodb.net/test";
const connectToMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
