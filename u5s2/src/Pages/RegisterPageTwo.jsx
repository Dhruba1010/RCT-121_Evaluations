import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RegistrationContext } from '../Context/RegistrationContextProvider'

function RegisterPageTwo() {
    const {address, phone, data, handleAddress, handlePhone, handleData} = useContext(RegistrationContext)

  return (
    <div>
        <input type='text' value={address} placeholder='Enter Address' onChange={(e) => handleAddress(e.target.value)} />
        <input type='text' value={phone} placeholder='Enter Phone Number' onChange={(e) => handlePhone(e.target.value)} />
        <button><Link to='/register/one'>PREV</Link></button>
        <button onClick={() => handleData({address, phone})} >SUBMIT</button>
    </div>
  )
}

export default RegisterPageTwo