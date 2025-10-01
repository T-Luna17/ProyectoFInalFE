import { Link } from "react-router-dom";

function NavBarLogin({ mostrarFormularioInicio, mostrarFormularioRegistro }) {
  return (
    <header className="navbarlogin">
      <img
        src="../src/img/ChatGPT Image 18 sept 2025, 08_50_44 a.m..png"
        alt="logo"
        className="logo"
      />
      <nav>
        <Link onClick={mostrarFormularioInicio} className="nav-link">Iniciar Sesión</Link>
        <Link onClick={mostrarFormularioRegistro} className="nav-link">Registrarse</Link>
      </nav>
    </header>
  );
}

export default NavBarLogin;

