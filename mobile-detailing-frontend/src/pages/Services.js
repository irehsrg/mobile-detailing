import React from 'react';
import Layout from './Layout';

const Services = () => {
  return (
    <Layout>
      <h1>Our Services</h1>
      <ul>
        <li>Exterior Wash and Wax</li>
        <li>Interior Deep Cleaning</li>
        <li>Paint Correction</li>
        <li>Ceramic Coating</li>
        <li>Headlight Restoration</li>
      </ul>
      <a href="/contact" className="btn">Book Now</a>
    </Layout>
  );
};

export default Services;