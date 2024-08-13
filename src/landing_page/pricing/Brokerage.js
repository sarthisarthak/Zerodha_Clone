import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <div className="col-8 p-4">
          <a href="/" style={{ textDecoration: "none" }}>
            <h3
              style={{ textAlign: "left", marginLeft: "60px" }}
              className="fs-5 mb-5"
            >
              Brokerage calculator
            </h3>
            <ul
              className="text-muted fs-8 text-small"
              style={{ textAlign: "left", lineHeight: "1.8" }}
            >
              <li>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>For NRI account (PIS), 0.5% or ₹200 per executed order</li>
              for equity (whichever is lower).
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </a>
        </div>
        <div className="col-4 p-4">
          <a href="/" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
