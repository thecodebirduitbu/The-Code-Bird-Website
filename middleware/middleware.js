const User = require("../models/user");
// const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  try {
    const { email } = req.method === "GET" ? req.query : req.body;
    const findUser = await User.findOne({ email: email });
    console.log(findUser);
    if (!findUser) {
      res.status(400).json({ error: "Can't Find User" });
    }
    next();
  } catch (error) {
    return res.status(400).json({ error: "Authentication Error " });
  }
};


module.exports = verifyUser ;