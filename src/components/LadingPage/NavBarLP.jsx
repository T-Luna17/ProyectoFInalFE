import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarLP() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="navbar">
      <img
        src="../src/img/ChatGPT Image 18 sept 2025, 08_50_44 a.m..png"
        alt="logo"
        className="logo"
      />

      <div className="nav-links">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/nosotros"}>Nosotros</Link>
      </div>

      <div className="perfil-container">
        <img
          src="../src/img/user.png"
          alt="Perfil"
          className="Perfil"
          onClick={() => setOpenMenu(!openMenu)}
        />

        <div className={`perfil-menu ${openMenu ? "open" : ""}`}>
          <Link to="/perfil">👤 Mi Perfil</Link>
          <button onClick={() => alert("Cerrando sesión...")}>
            🚪 Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBarLP;


