import React,{useContext} from 'react'
import { AuthContext } from '../auth/AuthProvider'

export const useAuth = () => {
    const contextValue = useContext(AuthContext)
  return contextValue
}
