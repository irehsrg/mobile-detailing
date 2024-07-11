import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <div className="home-page">
        <h1>Welcome to Premium Mobile Detailing</h1>
        <p>Experience the best in mobile car detailing services.</p>
        <Link to="/services" className="btn">Explore Our Services</Link>
      </div>
    </Layout>
  );
};

export default Home;