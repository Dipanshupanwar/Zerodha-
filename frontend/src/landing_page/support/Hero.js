import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' style={{ backgroundColor:"rgb(68, 143, 234)", color:"white"}}>
            <div className=' p-3' style={{ display:"flex", justifyContent:"space-between" , margin:"0 150px"}}>
                <h4>Support Portal</h4>
                <a href='/' style={{color:"white"}}>Track tickets</a>
            </div>
            <div className=' row p-3 mb-5' >
              <div className='col-6 p-5'>
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input style={{ width:"100%", padding:"20px 50px"}} placeholder='EG: how do i activate f&o , why is my order getting rejected '></input>
                 <a style={{color:"white"}} href='/'>Current Buybacks - March 2025</a>
                 <a style={{color:"white" ,marginLeft:"2rem"}} href='/'>Current Buybacks - March 2025</a>
                 <a style={{color:"white" ,marginLeft:"2rem"}} href='/'>Current Buybacks - March 2025</a>
                 <a style={{color:"white" ,marginLeft:"2rem"}} href='/'>Current Buybacks - March 2025</a>
              </div>
              <div className='col-6 p-5'>
                <h1>Featured</h1>
                <ol>
                    <li> <a style={{color:"white"}} href='/'>Current Buybacks - March 2025</a></li>
                    <li> <a href='/' style={{color:"white"}}>Rights Entitlements listing in March 2025</a></li>
                </ol>
              </div>
            </div>


        </section>
     );
}

export default Hero;