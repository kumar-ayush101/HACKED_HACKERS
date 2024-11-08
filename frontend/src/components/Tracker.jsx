import React from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import Card from './Card';

const Tracker = () => {
  return (
    <div className="tracker">
      <Navbar />
      <h2>Tracker Page</h2>
      <Card title="Tracking Data" content="Details about tracking..." />
    </div>
  );
};

export default Tracker;