import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}
