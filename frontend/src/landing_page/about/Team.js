import React from 'react';
function Team() {
    return (
    
        <div className='container'>
            <div className='row'>
                <h1 className='text-center fs-2 text-muted'>People</h1>
            </div>
            <div className='row mt-5  '>
                <div className='col-5 text-muted text-center '  >
                    <img src='/image/1627382326466.jpg' style={{width:"12rem", marginLeft:"1rem" , borderRadius:"50%", textAlign:"center", alignItems:"center"}}></img>
                <h3 style={{fontSize:"1.3rem"}}>Dipanshu Panwar</h3>
                <h3 style={{fontSize:"1.5rem"}}> founder of dip-notes and zeroda</h3>
                </div>
                <div className='col-7'>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.<br/> Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>

            </div>
        </div>
      );
}

export default Team;