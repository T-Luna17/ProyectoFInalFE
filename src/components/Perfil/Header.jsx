import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function cerrarSesion() {
    navigate("/login");
  }

  function volver() {
    navigate(-1);
  }

  return (
    <nav className="header">
      {/* Logo como imagen */}
      <div className="logo">
        <img src="../src/img/ChatGPT Image 18 sept 2025, 08_50_44 a.m..png" alt="logo" />
      </div>

      {/* Botones */}
      <div className="botones">
        <button onClick={volver} className="boton">
          Volver
        </button>
        <button onClick={cerrarSesion} className="boton">
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}

export default Header;