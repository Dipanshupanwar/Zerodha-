import React from 'react';
function Rightsection({ imageUrl,
    productName,
    productDescription}
   ) {
    return (
      <div className='container mt-5' >
      <div className='row'>
         
          <div className='col-4 ' style={{ marginTop:"10rem" }}>
              <h1>{   productName}</h1>
              <p>{productDescription}    </p>
              <a href='/'>learn more</a>
          </div>
          <div className='col-2'></div>
           <div className='col-5 '>
              <img  src={imageUrl}></img>
          </div>
      </div>
  </div>
      );
}

export default Rightsection;