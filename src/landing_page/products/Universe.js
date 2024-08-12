import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center p-5 ">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          {" "}
          <img src="media/images/smallcaseLogo.png" alt="smallcase" />
          <p className="text-small text-muted">
            {" "}
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          {" "}
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "60%" }}
            alt="smallcase"
          />
          <p className="text-small text-muted">
            {" "}
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          {" "}
          <img
            src="media/images/dittoLogo.png"
            alt="smallcase"
            style={{ width: "30%" }}
          />
          <p className="text-small text-muted">
            {" "}
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          {" "}
          <img
            src="media/images/streakLogo.png"
            alt="smallcase"
            style={{ width: "35%" }}
          />
          <p className="text-small text-muted">
            {" "}
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          {" "}
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="smallcase"
            style={{ width: "55%" }}
          />
          <p className="text-small text-muted">
            {" "}
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          {" "}
          <img src="media/images/smallcaseLogo.png" alt="smallcase" />
          <p className="text-small text-muted">
            {" "}
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Universe;
