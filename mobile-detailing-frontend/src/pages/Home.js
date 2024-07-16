import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <div className="home-page">
        <video autoPlay loop muted className="video-background">
          <source src="/Car Edit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="home-content">
          <h1>We drive for perfection</h1>
          <p>Your local </p>
          <div className="button-group">
            <Link to="/services" className="btn btn-primary">LEARN MORE</Link>
            <Link to="/booking" className="btn btn-secondary">MAKE A BOOKING</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;