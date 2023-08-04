const express = require("express");
const router = express.Router();
const {register , paymentOrder , paymentDone , login , userData ,logout} = require('../controllers/appController');
const {verifyUser , verifyToken} = require('../middleware/middleware');




router.post("/register",register);
router.post("/login",verifyUser,login);
router.post("/paymentVerify",paymentOrder);
router.post("/payment",verifyToken,paymentDone);
router.get("/user",verifyToken,userData);
router.get("/logout",logout);
router.get("/razor/key", (req, res) => {
  res.status(200).json({ key: process.env.RAZOR_KEY });
});





module.exports = router;
