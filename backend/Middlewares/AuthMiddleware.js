const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.json({ status: false, message: "Invalid token" });
      } else {
        const user = await User.findById(decoded.id);
        if (user) {
          return res.json({ status: true, user: user.username });
        } else {
          return res.json({ status: false, message: "User not found" });
        }
      }
    });
  } catch (error) {
    console.error("Error in userVerification:", error);
    res.status(500).json({ status: false, message: "Server error" });
  }
};
