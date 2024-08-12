import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero" className="mb-5" />
        <h1 className="mt-5 fs-2 mb-3">Invest in everything</h1>
        <p className="mb-3">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more
        </p>
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

export default Hero;
