import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function RequireAuth({ children }:{ children: JSX.Element }) {
  let { user,isLogged } = useAuth();
  let location = useLocation();

  if (!isLogged()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}