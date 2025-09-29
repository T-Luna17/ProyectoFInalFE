import NavbarV from "../components/Voluntario/NavBarV";
import Actividades from "../components/Voluntario/Actividades";
import "../style/Actividades.css";

function PaginaActividades() {
  return (
    <div>
      <NavbarV/>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Mis actividades</h1>
      <Actividades />
    </div>
  );
}

export default PaginaActividades;
