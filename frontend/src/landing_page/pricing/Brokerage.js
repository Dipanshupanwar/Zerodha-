import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <div className="col-6 p-4">
          <a style={{ fontSize: "1.4rem", textDecoration: "none" }} href="/">
            <h1 style={{ fontSize: "1.4rem", textDecoration: "none" }}>
              Brokerage Calculter
            </h1>
          </a>
          <ul
            style={{
              textAlign: "left",
              lineHeight: "1.9rem",
              marginTop: "2rem",
            }}
          >
            <li>
              Securities Transaction Tax (STT): Varies by transaction type; for
              instance, 0.1% on both buy and sell sides for equity delivery
              trades
            </li>
            <li>
              {" "}
              Exchange Transaction Charges: Levied by exchanges (NSE, BSE, MCX)
              based on transaction value.
            </li>
            <li>
              {" "}
              Goods and Services Tax (GST): 18% on brokerage and transaction
              charges.
            </li>
            <li> SEBI Charges: ₹10 per crore of transaction value.</li>
            <li>
              {" "}
              Stamp Duty: Varies by state; for Madhya Pradesh, it's 0.015% for
              delivery tra
            </li>
          </ul>
        </div>
        <div className="col-6 p-4">
          <a style={{ fontSize: "1.4rem", textDecoration: "none" }} href="/">
            <h1 style={{ fontSize: "1.4rem" }}>List Of Charges </h1>
          </a>
             <ul
                style={{
                  textAlign: "left",
                  lineHeight: "1.9rem",
                  marginTop: "2rem",
                }}
              >
                <li>Equity Delivery: No brokerage charges (₹0</li>
                <li>
                  {" "}
                  Exchange Transaction Charges: Levied by exchanges (NSE, BSE,
                  MCX) based on transaction value.
                </li>
                <li>
                  {" "}
                  Goods and Services Tax (GST): 18% on brokerage and transaction
                  charges.
                </li>
                <li>
                  {" "}
                  Equity Intraday, Futures, and Options: Lower of 0.03% or ₹20
                  per executed order.
                </li>
                <li>
                  {" "}
                  Currency and Commodity Trades: Lower of 0.03% or ₹20 per
                  executed order.
                </li>
              </ul>
         
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
