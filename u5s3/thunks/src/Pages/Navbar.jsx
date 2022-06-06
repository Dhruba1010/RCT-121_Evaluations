import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <Link to='/'>Login</Link>
        <Link to='/posts'>Posts</Link>
    </div>
  )
}

export default Navbar