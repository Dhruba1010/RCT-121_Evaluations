import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Posts from './Posts'
import PrivateRoute from './PrivateRoute'

function AllRoutes() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={
                <PrivateRoute>
                    <Posts />
                </PrivateRoute>
            } />
        </Routes>
    </div>
  )
}

export default AllRoutes