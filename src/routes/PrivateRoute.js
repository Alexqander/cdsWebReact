import React from 'react'
import { Route,Redirect, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { LoginPage } from '../pages/log/LoginPage';

export const PrivateRoute = ({component:Component, ...rest}) => {
    const auth = useAuth();
  return (
    <Route {...rest}>
        {auth.isLogged() ? <Component/> :(<></>)}
    </Route>
  )
}
