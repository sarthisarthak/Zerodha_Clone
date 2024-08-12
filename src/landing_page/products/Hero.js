import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 border-bottom">
      <div className="text-center mt-5">
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
