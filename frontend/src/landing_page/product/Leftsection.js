import React from "react";
function Leftsection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6  ">
          <img src={imageUrl}></img>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
          <a href="/" src={tryDemo}>try demo </a>
          <a  href="/" src={learnMore} style={{marginLeft:"20%"}}>try demo </a>
          </div>
        <div  className="mt-3">
            <a src={googlePlay}>
            <img src="\image\googlePlayBadge.svg"></img>{" "}
          </a>
          <a src={appStore}>
            <img src="\image\appstoreBadge.svg"></img>
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
