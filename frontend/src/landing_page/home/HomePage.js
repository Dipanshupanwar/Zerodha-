import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Footer from '../Footer';
import Openaccount from '../OpenAccount';
import Navbar from '../Navbar';
function Homepage() {
    return ( 
      <>

      <Hero/>
      <Award/>
      <Stats/>
      <Pricing/>
      <Education/>
      <Openaccount/>
    

      </>
     );
}

export default Homepage;