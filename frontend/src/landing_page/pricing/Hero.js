import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5' >
            <div className='row text-center mt-5 p-5'>
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>
            <div className='row'>
                <div className='col-4 mt-5 text-center p-5 text-muted '> 
                    <img src='\image\pricingEquity.svg'></img>
                    <h2 style={{ fontSize:"1.6rem"}}>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                </div>
                <div className='col-4 mt-5 text-center p-5 text-muted '> 
                    <img src='\image\intradayTrades.svg'></img>
                    <h2 style={{ fontSize:"1.6rem"}}>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trad</p>

                </div>
                <div className='col-4 mt-5 text-center p-5 text-muted  '> 
                    <img src='\image\pricingEquity.svg'></img>
                    <h2 style={{ fontSize:"1.6rem"}}>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charge</p>

                </div>
            </div>
            <div className='row text-center'>
        
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-3 btn btn-primary fs-5" style={{ width:"20%",margin:"0 auto", borderRadius:"2"}}>Sign up for free</button>
        
            </div>
        </div>
     );
}

export default Hero;