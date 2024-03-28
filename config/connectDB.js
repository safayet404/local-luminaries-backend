

const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const NAME = process.env.NAME;
const PASS = process.env.PASSWORD;

const connectDB = async () => {

  await mongoose.connect(
    `mongodb+srv://${NAME}:${PASS}@local-luminaries.g1512qf.mongodb.net/?retryWrites=true&w=majority&appName=local-luminaries`
  );

  console.log(`the db is connect with ${mongoose.connection.host}`);

  
};

module.exports = connectDB;



