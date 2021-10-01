const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://prashanth:prashanth2856@cluster0.fol3d.mongodb.net/skinstore?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
