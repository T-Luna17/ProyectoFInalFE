import { useState, useEffect } from "react";
import NavBarO from "../components/Organizacion/NavBarO";
import Evento from "../components/Organizacion/Evento";
import Formulario from "../components/Organizacion/Formulario";
import { getEventos } from "../services/servicesEventos";
import "../style/Organizacion.css";

function Organizacion() {
  const [eventos, setEventos] = useState([]);

  // cargar eventos del backend cuando abre la página
  useEffect(() => {
    async function cargar() {
      const data = await getEventos();
      const filtroEventos = data.filter((e)=>e.idOrganizacion == localStorage.getItem("usuario").id)
      console.log(data);
      console.log(filtroEventos);
      setEventos(filtroEventos);
    }
    cargar();
  }, []);


  return (
    <div>
      <NavBarO />
      <div className="contenido">
        <Evento eventos={eventos} setEventos={setEventos} onEditar={1} />
        <Formulario eventos={eventos} setEventos={setEventos} />
      </div>
    </div>
  );
}

export default Organizacion;

