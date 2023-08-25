import React from 'react';
import "./pages.css";

const Homepage = () => {
  return (
    <div>
      <div className='home'>
        <video autoPlay loop muted id="background_video">
          <source src="https://joy1.videvo.net/videvo_files/video/free/video0453/large_watermarked/_import_605ee5cef39d83.42651798_preview.mp4" type="video/mp4" />

        </video>
        <a href="/products">Browse Products</a>
      </div>
      <div className='holder'>
        <div className='display'>
          <h4>Autumn Sale</h4>
          <p>Start from mid-September</p>
        </div>
        <div className='display'>
          <h4>Are you new to the B4Y</h4>
          <p>Grap the discount upto 25% for the first purchase</p>
          <p>Apply code: <span>B4YNEW</span></p>
        </div>
        <div className='display'>
          <h4>Free Delivery</h4>
          <p>For every purchase above 50€</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;