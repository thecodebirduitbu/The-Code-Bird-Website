const User = require("../models/user.js");

const register = async (req, res) => {
  try {
    const { name, roll, domain, department, batch, age, dob, phone } = req.body;
    if (!name || !roll || !domain || !department || !batch || !age || !dob || !phone) {
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
        name,
        roll,
        domain,
        department,
        batch,
        age,
        phone,
        dob,
      });
      try {
        await newUser.save();
        return res
          .status(200)
          .json({ message: "Registration Done!", success: true });
      } catch (error) {
        return res.status(500).send({ error: error, success: false });
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error, success: false });
  }
};
module.exports = register;
