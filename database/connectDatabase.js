const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Data Base Connected");
  })
  .catch((error) => {
    console.log(error);
  });
