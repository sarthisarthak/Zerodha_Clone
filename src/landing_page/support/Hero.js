import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid p-5 mb-5" id="support_hero">
      <div className="p-3" id="support_wrapper">
        <h4>Support Portal</h4>
        <a href="/" style={{ color: "white" }}>
          Track tickets
        </a>
      </div>
      <div className="row p-3 mx-5" id="support_search">
        <div className="col-6">
          <h2 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input placeholder="Eg: how do I activate F&O, why is my order getting rejected...  " />
          <br />
          <a href="/" style={{ color: "white" }}>
            {" "}
            Track account opening{" "}
          </a>
          <a href="/" style={{ color: "white" }}>
            {" "}
            Track segment activation{" "}
          </a>
          <a href="/" style={{ color: "white" }}>
            {" "}
            Intraday margins{" "}
          </a>
          <br />
          <a href="/" style={{ color: "white" }}>
            {" "}
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5" id="support_featured">
          <h2 className="fs-3">Featured</h2>
          <a href="/" style={{ color: "white", lineHeight: "3" }}>
            1. Surveillance measure on scrips - August 2024
          </a>
          <br />
          <a href="/" style={{ color: "white" }}>
            2. Latest Intraday leverages and Square-off timings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
