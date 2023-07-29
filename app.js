const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const router = require('./router/route');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000; 
require('./database/connectDatabase')


app.use(cors());
app.use(bodyParser.json());
app.use("/api",router);
app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`)
})