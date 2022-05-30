import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <p>Welcome to Home Page</p>
        <p>To Register click on the below button</p>
        <button><Link to='/register/one' >Register</Link></button>
        
    </div>
  )
}

export default Home