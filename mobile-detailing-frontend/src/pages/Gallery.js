import React from 'react';
import Layout from './Layout';

const Gallery = () => {
  return (
    <Layout>
      <h1>Our Work</h1>
      <div className="gallery-grid">
        {/* Add your gallery images here */}
        <img src="/path/to/image1.jpg" alt="Before and After 1" />
        <img src="/path/to/image2.jpg" alt="Before and After 2" />
        <img src="/path/to/image3.jpg" alt="Before and After 3" />
      </div>
    </Layout>
  );
};

export default Gallery;