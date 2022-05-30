import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [isAuth, setAuth] = useState(false);

    const trueAuth = () => {
        setAuth(true);
    }

    const falseAuth = () => {
      setAuth(false);
    }

  return (
    <AuthContext.Provider value={{isAuth, setAuth, trueAuth, falseAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;