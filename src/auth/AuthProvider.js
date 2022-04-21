import React ,{ createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

  const[user ,setUser] = useState(
    JSON.parse(window.localStorage.getItem("@user")) || null
  )

  useEffect(() => {
    try {
      window.localStorage.setItem('@user', JSON.stringify(user))
    } catch (error) {
      window.localStorage.removeItem('@user')
      console.error(error)      
    }
  },[user])

  const contextValue ={
    user,
    login(user){
      setUser(user)
    },
    loggut(){
      setUser(null)
    },
    isLogged(){
      return !!user
    }
  }

  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
  )
}
