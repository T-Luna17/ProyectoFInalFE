import { useState, useEffect } from "react";
import ListaInscritos from "./ListaInscritos";
import ListaEventos from "./ListaEventos";
import { getEventos, inscribirEnEvento, getinscritos } from "../../services/servicesEventos";


function Actividades() {
  const [eventos, setEventos] = useState([]);
  const [inscritos, setInscritos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let ev = await getEventos();
      let ins = await getinscritos();
      const siActivos = ins.filter((ins)=>ins.estado === "activo")
      setEventos(ev);
      console.log(ev);
      setInscritos(siActivos);
    }
    fetchData();
  }, []);

  async function inscribirse(evento) {
    const objEvento= {
        idEvento: evento.id,
        nombreOrganizacion: evento.nombreOrganizacion,
        idUsuario: JSON.parse(localStorage.getItem("usuario")).id,
        nombreUsuario: JSON.parse(localStorage.getItem("usuario")).nombre,
        fechaInscripcion: new Date().toISOString().split("T")[0],
        fecha: evento.fecha,
        lugar:evento.lugar,
        estado:evento.estado,
        nombreEvento:evento.titulo
    }
    console.log(objEvento);
    await inscribirEnEvento(objEvento);
  }

  return (
    <div className="contenedor-actividades">
      <ListaInscritos inscritos={inscritos} />
      <ListaEventos eventos={eventos} inscribirse={()=>inscribirse(eventos[0])}/>
    </div>
  );
}

export default Actividades;

