const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const cokkie = require("cookie-parser");
const router = require('./router/route');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 9000; 
require('./database/connectDatabase')

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cokkie());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",router);
app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`)
})