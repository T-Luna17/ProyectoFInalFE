import { useNavigate } from "react-router-dom";

function NavbarAdmin() {
  const navigate = useNavigate();

  function cerrarSesion() {
    navigate("/Sesion");
  }

  return (
    <nav className="navbar-admin">
      <img src="../src/img/ChatGPT Image 18 sept 2025, 08_50_44 a.m..png" alt="logo" className="logo"/>
      <h2> Administrador</h2>
      <button onClick={cerrarSesion} className="btn-logout">
        Cerrar sesión
      </button>
    </nav>
  );
}

export default NavbarAdmin;
