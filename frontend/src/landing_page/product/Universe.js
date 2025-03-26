import React from 'react';
function Universe() {
    return (
        <div className='container' mt-5>
          <div className='row text-muted text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
          </div>
          <div className='row'>
            <div className='col text-muted text-center p-3'>
              <div>   <img style={{ width:"9rem" }} src='\image\zerodhaFundhouse.png'></img>
              <p className='mt-3 p-3 '>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p></div>
           
            </div>
            <div className='col text-muted text-center p-3'>
              <img style={{ width:"9rem"}} src='\image\sensibullLogo.svg'></img>
              <p className='mt-3 p-3 '>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
            </div>
            <div className='col text-muted text-center  p-3'>
              <img style={{ width:"9rem"}}src='/image/tijori.svg'></img>
              <p className='mt-3 p-3 '>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and mor</p>
            </div>

          </div>
         
        </div>
        
        
      );
}

export default Universe;