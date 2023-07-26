const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// import User from "./models/user"
const User = require('./models/user');
require('dotenv').config()


const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());


const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// const PORT = process.env.PORT || 8000; 
// app.use(express.json());


app.post('/register', (req, res) => {
    const {
    fullName,
    roll,
    branch,
    batch,
    age,
    contactNumber,
    dob,
    domain
    } = req.body;

    const newUser = new User({
        fullName,
        roll,
        branch,
        batch,
        age,
        contactNumber,
        dob,
        domain
    });

    newUser.save((err) => {
        if (err) {
            console.error('Error saving user:', err);
            return res.status(500).json({
                error: "Failed to register user"
            });
        }

        return res.status(201).json({
            message: 'User registered successfully'
        });
    });
});


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})