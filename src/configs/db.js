const mongoose = require("mongoose");
require("dotenv").config()

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fol3d.mongodb.net/skinstore?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
