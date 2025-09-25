import { useEffect, useState } from "react";
import { getEventos, deleteEvento, toggleEstado, inscribirEnEvento,editEvento} from "../../services/servicesEventos";
import EventoFila from "./EventoFila";

function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    cargarEventos();
  }, []);

  async function cargarEventos() {
    const data = await getEventos();
    setEventos(data);
  }

  async function eliminar(id) {
    await deleteEvento(id);
    cargarEventos();
  }

  async function onEditar(id) {



    const evento = await editEvento(id);
    console.log(evento);



    
    cargarEventos();
  }

  async function cambiarEstado(id, estado) {
    await toggleEstado(id, estado);
    cargarEventos();
  }

  async function inscribir(id) {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
      alert("Debes iniciar sesión para inscribirte.");
      return;
    }

    const resultado = await inscribirEnEvento(id, usuario.id);

    if (resultado.yaInscrito) {
      alert("⚠️ Ya estás inscrito en este evento");
    } else {
      alert("✅ Inscripción exitosa");
    }

    cargarEventos();
  }

  return (
    <section className="eventos">
      <h2>Lista de eventos</h2>
      <table>
        <tbody>
          {eventos.map((ev) => (
            <EventoFila
              key={ev.id}
              evento={ev}
              onEliminar={() => eliminar(ev.id)}
              onEditar={() => cargarModal(ev.id)}
              onToggleEstado={() => cambiarEstado(ev.id, ev.estado)}
              onInscribir={() => inscribir(ev.id)}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Eventos;


