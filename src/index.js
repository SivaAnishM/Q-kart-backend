const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

let DB_URL = config.mongoose.url + '/qkart'
const PORT = config.port
const options = config.mongoose.options


mongoose
  .connect(DB_URL,options)
  .then(() => {
    console.log("connected to DB", DB_URL);
  })
  .catch((err) => {
    console.log(err);
  });

  app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})



