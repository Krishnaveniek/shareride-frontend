// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Loginform from './components/loginform/loginform';
import Registration from './components/registration/registrationform';


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login"
      element={<Loginform/>}/>
      <Route path="/registeration"
      element={<registerationform page/>}/>
    </Routes>
    </BrowserRouter>
  );
};
    
export default AppRoutes;
 