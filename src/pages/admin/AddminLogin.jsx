import React, { useState } from 'react';
import '../admin/AddminLogin.css'


const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [scan, setSupermarketCodeus] = useState('');

  const handleSignUp = () => {

  };

  return (
    <div className="admin-container">
      <h1 className="admin-heading">Admin Login</h1>
      <div className="admin-hold">
        <input
          type="password"
          className="admin-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          className="admin-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          className="admin-input"
          placeholder="Supermarket Code"
          value={scan}
          onChange={(e) => setSupermarketCode(e.target.value)}
        />

        <button className="admin-button" onClick={handleSignUp}>
          LOGIN
        </button>

        <p className="admin-user">
          Don't have an Account?{' '}
          <span className="admin-login-link">SignUp</span>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;