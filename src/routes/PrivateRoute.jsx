import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ children }) {
  const storedUser = localStorage.getItem("usuario");

  const validarInicio = ()=>{
    if (storedUser) {
        return true
    }
    return false
  }
  return (
    validarInicio() ? children : <Navigate to="/Sesion" />
  );
}

export default PrivateRoute;
