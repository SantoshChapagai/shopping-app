import React from 'react';
import "./pages.css";

const Homepage = () => {
  return (
    <div className='home'>
      <video autoPlay loop muted id="background_video">
        <source src="https://joy1.videvo.net/videvo_files/video/free/video0453/large_watermarked/_import_605ee5cef39d83.42651798_preview.mp4" type="video/mp4" />

      </video>

      <a href="/products">Browse Products</a>

    </div>

  );
};

export default Homepage;