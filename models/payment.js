const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPhone: {
    type: Number,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
