import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [isAuth, setAuth] = useState(false);

    const toogleAuth = () => {
        setAuth(!isAuth);
    }

  return (
    <AuthContext.Provider value={{isAuth, toogleAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;