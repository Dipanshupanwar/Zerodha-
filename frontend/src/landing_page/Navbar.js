import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div style={{ height: "3rem", border: "1px solid grey", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
        
            {/* Logo Section */}
            <div>
                  <Link to="/"><img src="/image/logo.svg" alt="Logo" style={{ width: "8rem" }} /></Link>
            </div>

            {/* Navigation Links */}
            <nav>
                <ul style={{ display: "flex", listStyle: "none", gap: "2rem", margin: 0, padding: 0 }}>
                    <li><Link to="/signup" style={{ textDecoration: "none", color: "black" }}>Signup</Link></li>
                    <li><Link to="/about" style={{ textDecoration: "none", color: "black" }}>About</Link></li>
                    <li><Link to="/product" style={{ textDecoration: "none", color: "black" }}>Product</Link></li>
                    <li><Link to="/pricing" style={{ textDecoration: "none", color: "black" }}>Pricing</Link></li>
                    <li><Link to="/support" style={{ textDecoration: "none", color: "black" }}>Support</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
