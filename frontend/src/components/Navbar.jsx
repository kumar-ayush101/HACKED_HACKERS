import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><Link to="/tracker">Tracker</Link></li>
        <li><Link to="/recommendations">Recommendations</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/leaderboard">LeaderBoard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;