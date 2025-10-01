import { useEffect, useState } from "react";
import Header from "../components/Perfil/Header";
import Perfil from "../components/Perfil/Perfil";
import Experiencia from "../components/Perfil/Experiencia";
import Habilidades from "../components/Perfil/Habilidades";
import Disponibilidad from "../components/Perfil/Disponibilidad";
import Voluntarios from "../components/Perfil/Voluntarios";
import FooterLP from "../components/LadingPage/FooterLP";
import { getUsuarioById } from "../services/servicesEventos"; 
import "../style/Perfil.css";

function PerfilPage({ userId }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function fetchUsuario() {
      try {
        const data = await getUsuarioById(JSON.parse(localStorage.getItem("usuario")).id);
        setUsuario(data);
      } catch (error) {
        console.error("Error cargando usuario:", error);
      }
    }
    fetchUsuario();
  }, [userId,usuario]);

  if (!usuario) return <p>Cargando perfil...</p>;

  return (
    <div className="contenedor">
      <Header />
      <div className="contenido">
        <div className="izquierda">
          <Perfil usuario={usuario} setUsuario={setUsuario} />

          {/* Componentes independientes para edición */}
          <Disponibilidad disponibilidad={usuario.disponibilidad} usuario={usuario} setUsuario={setUsuario} />
          <Experiencia experiencia={usuario.experiencia} usuario={usuario} setUsuario={setUsuario} />
          <Habilidades habilidades={usuario.habilidades} usuario={usuario} setUsuario={setUsuario} />
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


