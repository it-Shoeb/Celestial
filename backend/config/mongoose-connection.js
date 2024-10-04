const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://shaikhshoebmy:admin@cluster0.q2u8v.mongodb.net/planet?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("mongoDB connection");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose.connection;