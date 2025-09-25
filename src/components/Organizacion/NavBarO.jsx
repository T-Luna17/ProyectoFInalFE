import { Link, useNavigate } from "react-router-dom";

function NavBarO() {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("usuario"); 
    navigate("/Sesion");
  }
  return (
    <nav className="navbar">
      <img
        src="../src/img/ChatGPT Image 18 sept 2025, 08_50_44 a.m..png"
        alt="logo"
        className="logo"
      />
      <div className="links">
        <a href="#">Panel de control</a>
        <Link to={"/perfil"}>Perfil</Link>

        <button className="cerrar" onClick={handleLogout}>
      Cerrar sesión
    </button>
      </div>
    </nav>
  );
}

export default NavBarO;
