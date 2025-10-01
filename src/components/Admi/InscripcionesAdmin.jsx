import { useEffect, useState } from "react";
import { getinscritos, getEventos, getUsuarios } from "../../services/servicesEventos";

function InscripcionesAdmin() {
  const [inscripciones, setInscripciones] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataInscripciones = await getinscritos();
      const dataEventos = await getEventos();
      const dataUsuarios = await getUsuarios();
      setInscripciones(dataInscripciones);
      setEventos(dataEventos);
      setUsuarios(dataUsuarios);
    }
    fetchData();
  }, []);

  function nombreUsuario(id) {
    const u = usuarios.find((x) => x.id === id);
    return u ? `${u.nombre} ${u.apellido}` : "Desconocido";
  }

  function nombreEvento(id) {
    const e = eventos.find((x) => x.id === id);
    return e ? e.evento : "Evento desconocido";
  }

  return (
    <div className="card">
      {inscripciones.length > 0 ? (
        <ul>
          {inscripciones.map((i) => (
            <li key={i.id}>
              {nombreUsuario(i.idUsuario)} inscrito en {nombreEvento(i.idEvento)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay inscripciones</p>
      )}
    </div>
  );
}

export default InscripcionesAdmin;
