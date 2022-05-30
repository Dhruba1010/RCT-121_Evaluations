import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import { RegistrationContext } from '../Context/RegistrationContextProvider'

function RegisterPageOne() {
    const {name, email, data, handleName, handleEmail, handleData} = useContext(RegistrationContext);
    const {trueAuth} = useContext(AuthContext);
    console.log(data)
  return (
    <div>
        <input value={name} type='text' placeholder='Enter Name' onChange={(e) => handleName(e.target.value)} />
        <input value={email} type='email' placeholder='Enter Email' onChange={(e) => handleEmail(e.target.value)} />
        <button  onClick={() => {handleData({name, email}); trueAuth()} } ><Link to='/register/two'>NEXT</Link></button>
        <div>{[name, email]}</div>
    </div>
  )
}

export default RegisterPageOne