const monogoose = require("mongoose");
const userdatails = require("../Model/index");
const connect = () => {
  try {
    const connectionParams = monogoose.connect(process.env.DATABASE_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
