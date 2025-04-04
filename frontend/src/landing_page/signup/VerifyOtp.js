import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password, username } = location.state || {}; // Get data from Signup page

  const [otp, setOtp] = useState("");

  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:3002/api/auth/verify-otp", {
        email,
        otp,
      });

      if (res.data.success) {
        await axios.post("http://localhost:3002/api/auth/signup", {
          email,
          password,
          username,
        });

        alert("Signup successful! Redirecting to login...");
        navigate("/login"); // Move to Login page after successful verification
      } else {
        alert("Invalid OTP, try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px", border: "1px solid #ccc", maxWidth: "400px", margin: "auto", borderRadius: "8px", background: "#f9f9f9" }}>
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px", width: "90%", textAlign: "center" }}
      />
      <button 
        onClick={verifyOtp}
        style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer", borderRadius: "5px" }}
      >
        Verify OTP
      </button>
    </div>
  );
};

export default VerifyOtp;
