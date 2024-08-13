import React from "react";

const Hero = () => {
  return (
    <div className="container ">
      <div
        className="row border-bottom p-5 mt-5 mb-5 fs-6 text-center"
        style={{ lineHeight: "1.9" }}
      >
        <h1>Pricing</h1>
        <p className="text-muted mb-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row mt-5 p-5 border-bottom">
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="equity"
            style={{ width: "70%" }}
          />
          <h1 className="fs-2 mb-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/intradayTrades.svg"
            alt="equity"
            style={{ width: "70%" }}
          />
          <h1 className="fs-2 mb-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="equity"
            style={{ width: "70%" }}
          />
          <h1 className="fs-2 mb-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
