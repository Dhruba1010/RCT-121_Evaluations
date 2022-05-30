import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPageOne from './RegisterPageOne';
import RegisterPageTwo from './RegisterPageTwo';
import Dashboard from './Dashboard';
import Home from './Home';
import PrivateRoute from './PrivateRoute';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register/one" element={<RegisterPageOne />} />
        <Route path="/register/two" element={
          <PrivateRoute>
            <RegisterPageTwo />
          </PrivateRoute>
        } />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
    </Routes>
  )
}

export default AllRoutes