const User = require("../models/user.js");
const Payment = require("../models/payment.js");
const crypto = require("crypto");
const Razorpay = require("razorpay");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");




const instance = new Razorpay({
  key_id: "rzp_test_8oySKX9rIGczSe",
  key_secret: "NIS5Vjt76v707Rkvr2w8MMhQ",
});

const paymentOrder = async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // amount in the smallest currency unit
    currency: "INR",
  };
  try {
    const order = await instance.orders.create(options);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).send({ success: false });
  }
};

const paymentDone = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;
 
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "NIS5Vjt76v707Rkvr2w8MMhQ")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
   const userData = req.userData;
    const payment = new Payment({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userName:userData.name,
      userPhone:userData.phone,
      userEmail:userData.email
    });
    try {
      await User.findByIdAndUpdate(
        {
          _id: userData._id,
        },
        {
          isPaymentDone: true,
        }
      );
      await payment.save();
      res.redirect(
        `http://localhost:3000/paymentdone?reference=${razorpay_payment_id}`
      );
    } catch (error) {
      res.status(400).json({
        success: false,
      });
    }
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

const register = async (req, res) => {
  try {
    const {
      password,
      cpassword,
      name,
      roll,
      domain,
      department,
      batch,
      age,
      email,
      phone
    } = req.body;
    if (
      !name ||
      !roll ||
      !domain ||
      !department ||
      !batch ||
      !age ||
      !email ||
      !phone ||
      !password ||
      !cpassword
    ) {
      return res
        .status(400)
        .json({ error: "Fill required fields", success: false });
    }
    const userExist = await User.findOne({ roll: roll });
    const userExistPhone = await User.findOne({ phone: phone });
    if (userExist || userExistPhone) {
      return res
        .status(403)
        .json({ error: "User Already Exists", success: false });
    } else {
      const newUser = new User({
        password,
        cpassword,
        name,
        roll,
        domain,
        department,
        batch,
        age,
        phone,
        email
      });
      try {
        const user = await newUser.save();
        return res
          .status(200)
          .json({ message: "Registration Done!", success: true, });
      } catch (error) {
        return res.status(500).send({ error: error, success: false });
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error, success: false });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(404).json({ error: "User Not Found" });
    } else {
      const verifyPass = await bcrypt.compare(password, userExist.password);
      if (verifyPass) {
        const token = jwt.sign(
          { id: userExist._id, roll: userExist.roll },
          process.env.JWT
        );
          return res
            .cookie("access_token", token, { httpOnly: true })
            .status(201)
            .json({
              msg: "Log In Done !",
              userName: userExist.name,
              token: token,
              cookie:"stored"
            });
      } else {
        return res.status(500).json({ error: "Invalid Details " });
      }
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};


const userData = async (req,res)=>{
   const userData = req.userData;
   res.status(200).json(userData);
}


























module.exports = { register, paymentOrder, paymentDone , login , userData };
