const express = require("express");
const router = express.Router();
const register = require('../controllers/appController');


router.get("/", (req, res) => {
  res.send("Hello from route");
});
router.post("/register",register);

module.exports = router;
