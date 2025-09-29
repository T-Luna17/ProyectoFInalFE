import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavbarV() {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="../src/img/ChatGPT Image 18 sept 2025, 08_50_44 a.m..png"
          alt="logo"
          className="logo"
        />
        <span className="titulo">ALAS SOLIDARIAS</span>
      </div>

      <div className="navbar-links">
        <a href="#">Panel de control</a>
        <Link to={"/perfil"}>Perfil</Link>
        <button className="btn-cerrar"
            onClick={()=>{
                localStorage.clear()
                navigate("/Sesion")
            }}
        >Cerrar Sesión</button>
      </div>
    </nav>
  );
}

export default NavbarV;
