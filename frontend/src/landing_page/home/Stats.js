import React from 'react';
function Stats() {
    return (
      <div className='container mt-5'>
      <div className='row'>  
          <div className='col-6 p-5' >
              <h1>Trust with confidence </h1>
              <h4 className='fs-5 mt-3'>Customer-first always</h4>
              <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
              <h4 className='fs-5 mt-3'>No spam or gimmicks</h4>
              <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
              <h4 className='fs-5 mt-3'>The Zerodha universe</h4>
              <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              <h4 className='fs-5 mt-3'>Do better with money</h4>
              <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
               
         
          </div>
          <div className='col-6 p-5'>
              <img   src='\image\ecosystem.png' style={{ width:"85%"}}/>
              <div className='row text-center mt-5' >
                  <a className='col-6'>explore our product</a> 
                  <a className='col-6'>try kite</a>
              </div>
          </div>


      </div>

   </div>
      );
}

export default Stats;