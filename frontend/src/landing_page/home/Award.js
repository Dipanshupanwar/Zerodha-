import React from 'react';
function Award() {
    return ( 
     <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img   src='\image\largestBroker.svg'/>
            </div>
            <div className='col-6 p-5' >
                 <h1>Trust with confidence </h1>
                 <p className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                   <div className='row mt-5'>
                       <div className='col-6'>
                           <ul>
                               <li className='mb-2'> future and option</li>
                               <li className='mb-2'> commedetive derivatives</li>
                               <li className='mb-2'> currenct derivation</li>
                           </ul>
                        </div>
                       <div className='col-6'>
                           <ul>
                              <li className='mb-2'> stack and ipos</li>
                              <li className='mb-2'> direct mutual funds</li>
                               <li className='mb-2'> bonds and gov maintainess</li>
                           </ul>
                       </div>
                       <img src='\image\pressLogos.png' className='mt-5'></img>
                  </div>
           
            </div>
            


        </div>

     </div>
     );
}

export default Award;