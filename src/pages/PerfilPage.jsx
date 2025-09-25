import Header from "../components/Perfil/Header";
import Perfil from "../components/Perfil/Perfil";
import Experiencia from "../components/Perfil/Experiencia";
import Habilidades from "../components/Perfil/Habilidades";
import Disponibilidad from "../components/Perfil/Disponibilidad";
import Voluntarios from "../components/Perfil/Voluntarios";
import FooterLP from "../components/LadingPage/FooterLP";
import "../style/Perfil.css";


function PerfilPage() {
  return (
    <div className="contenedor">
      <Header />
      <div className="contenido">
        <div className="izquierda">
          <Perfil />
          <Experiencia />
          <Habilidades />
          <Disponibilidad />
        </div>
        <div className="derecha">
          <Voluntarios />
        </div>
      </div>
      <FooterLP />
    </div>
  );
}

export default PerfilPage;
