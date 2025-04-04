const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
require('dotenv').config();


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel"); // Your User Schema

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Add to .env
    pass: process.env.EMAIL_PASS, // Add to .env
  },
});

// Store OTPs temporarily (or use Redis for better performance)
const otpStore = new Map();

// Generate & Send OTP
exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  const otpGenerator = require("otp-generator");

  // Generate a 6-digit numeric OTP
  function generateNumericOTP(length) {
    let otp = '';
    const digits = '0123456789';
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }
  
  const otp = generateNumericOTP(6);

  
  
  console.log(otp); // Outputs a 6-digit numeric OTP
  

  // Hash OTP before saving
  const hashedOTP = await bcrypt.hash(otp, 10);
  otpStore.set(email, hashedOTP); // Store in memory (use Redis for production)

  // Send OTP via email
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP for verification is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "OTP sent to email" });
  });
};

// Verify OTP
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const storedHashedOTP = otpStore.get(email);

  if (!storedHashedOTP) return res.status(400).json({ error: "OTP expired" });

  const isMatch = await bcrypt.compare(otp, storedHashedOTP);
  if (!isMatch) return res.status(400).json({ error: "Invalid OTP" });

  // Generate JWT token after verification
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

  // Remove OTP from storage after use
  otpStore.delete(email);

  res.json({ message: "OTP verified successfully", token });
};
