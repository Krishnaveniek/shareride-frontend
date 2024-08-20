// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginform from './components/loginform/loginform';
import Registerationform from './components/registration/Registrationform';

import "./App.css"


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={<Loginform />} />
        <Route path="/register"
          element={<Registerationform  />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
