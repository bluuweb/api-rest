const mongoose = require("mongoose");
require("dotenv").config();

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB conectada...");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = conectarDB;
