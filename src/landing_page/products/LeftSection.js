import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} alt="imageURL" />
        </div>
        <div className="col-1"></div>
        <div className="col-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="m-3">
            <a style={{ textDecoration: "none" }} href={tryDemo}>
              Try Demo →
            </a>{" "}
            <a
              style={{ textDecoration: "none", marginLeft: "50px" }}
              href={learnMore}
            >
              Learn More →
            </a>
          </div>
          <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt="googleplay" />
          </a>
          <a href={appStore}>
            {" "}
            <img src="media/images/appStoreBadge.svg" alt="appstore" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
