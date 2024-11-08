import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/">Sign Up</Link></p>
    </div>
  );
};

export default Login;