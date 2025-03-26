import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";
function Productpage() {
  return (
    <>
      <Hero />
      <Leftsection
        imageUrl="\image\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore
      />

      <Rightsection
        imageUrl="\image\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />


      <Leftsection
        imageUrl="\image\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devic "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore
      />
      <Rightsection
        imageUrl="\image\kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
    
      <Leftsection
        imageUrl="\image\varsity.png"
        productName="Varsity mobile"
        productDescription=" An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the goultra-fast  trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
        tryDemo=""
        flagship
        learnMore=""
        googlePlay=""
        appStore
      />
      <p className="text-center mt-5 fs-5 p-3" >Want to know more about our technology stack? Check out the <a href="/">Zerodha.tech</a> blog.</p>
  
      <Universe />
      <div className="text-center my-4">
  <button className="btn btn-primary">Sign up for free</button>
</div>

    </>
  );
}

export default Productpage;
