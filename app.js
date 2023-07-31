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
=======
app.get("/events", async(res, req) => {
    try{
        const events = await Event.find({});
        res.json(events);
    }
    catch(error){
        res.status(500).json({ error: "Internal server error"});
    }
});


app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`)
})