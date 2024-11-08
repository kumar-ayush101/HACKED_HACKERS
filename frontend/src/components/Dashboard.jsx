import React from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import Card from './Card';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>#HappyHabit</h1>
        <img src="cookie-icon.png" alt="Cookie Icon" className="cookie-icon" />
      </header>
      <Navbar />
      <div className="cards">
        <Card title="SURFING TIME" content="8 hours 11 mins" image="chart.png" />
        <Card title="Your Interests" content="Friendship, Parents, Cartoon, Football" />
        <Card title="Weekly Analysis" image="graph.png" />
        <Card title="Take a brisk walk" content="Wash your face" />
      </div>
      <footer className="footer">
        <p>2025 #HappyHabit Copyrights Reserved</p>
      </footer>
    </div>
  );
};

export default Dashboard;