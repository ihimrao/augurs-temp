import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { Button } from 'react-bootstrap';

import Login from './components/Login';
import Profile from './components/Profile';
export default function App() {
  localStorage.setItem('token', 'hey');
  const token = localStorage.getItem('token');

  if (token) {
    console.log('Loggedin');
  }
  const handleClick = (s) => {
    if (s === 'signup') {
      // navigate('/signup');
    }
    if (s === 'login') {
      // history.push('/login');
    }
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
      {/* <Button onClick={() => handleClick('signup')}>Signup</Button>
      <Button onClick={() => handleClick('login')}>Login</Button> */}
    </div>
  );
}
