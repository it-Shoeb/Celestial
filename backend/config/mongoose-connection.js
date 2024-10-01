const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/planet")
  .then(() => {
    console.log("mongoDB connection");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose.connection;