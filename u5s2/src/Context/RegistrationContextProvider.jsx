import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

function RegistrationContextProvider({children}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [data, setData] = useState([]);

    const handleName = (v) => {
        setName(v);
    }

    const handleEmail = (v) => {
        setEmail(v);
    }

    const handleAddress = (v) => {
        setAddress(v);
    }

    const handlePhone = (v) => {
        setPhone(v);
    }

    const handleData = (v) => {
        setData(v);
    }

  return (
    <RegistrationContext.Provider value={{name, email, address, phone, data, handleName, handleEmail, handleAddress, handlePhone, handleData}}>
        {children}
    </RegistrationContext.Provider>
  )
}

export default RegistrationContextProvider;