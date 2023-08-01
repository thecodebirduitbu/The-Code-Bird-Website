const express = require("express");
const router = express.Router();
const {register , paymentOrder , paymentDone , login , userData} = require('../controllers/appController');
const verifyUser = require('../middleware/middleware');




router.post("/register",register);
router.post("/login",verifyUser,login);
router.post("/paymentVerify",paymentOrder);
router.post("/payment",paymentDone);
router.get("/user",userData);
router.get("/razor/key", (req, res) => {
  res.status(200).json({ key: process.env.RAZOR_KEY });
});


module.exports = router;
