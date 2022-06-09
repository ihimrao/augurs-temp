import React from 'react';
import './style.css';
import { useNavigate } from 'react-router';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { Button } from 'react-bootstrap';

import Login from './components/Login';
export default function App() {
  const navigate = useNavigate();
  const handleClick = (s) => {
    if (s === 'signup') {
      navigate('/signup');
    }
    if (s === 'login') {
      history.push('/login');
    }
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Button onClick={() => handleClick('signup')}>Signup</Button>
      <Button onClick={() => handleClick('login')}>Login</Button>
    </div>
  );
}
