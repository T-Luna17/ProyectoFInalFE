import { useEffect, useState } from "react";
import { getEventos, deleteEvento, toggleEstado, inscribirEnEvento, editEvento } from "../../services/servicesEventos";
import EventoFila from "./EventoFila";

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [eventoEditando, setEventoEditando] = useState(null); // Evento que se va a editar
  const [formData, setFormData] = useState({ Titulo: "", fecha: "", lugar: "", descripcion: "" }); // datos del form
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    cargarEventos();
  }, []);

  async function cargarEventos() {
    const data = await fetch(`http://localhost:3001/eventos?idOrganizacion=${JSON.parse(localStorage.getItem("usuario")).id}`)
    const respuesta = await data.json()
    setEventos(respuesta)
  }

  async function eliminar(id) {
    await deleteEvento(id);
    cargarEventos();
  }

  // Cuando se hace clic en "Editar"
  function abrirModalEditar(evento) {
    setEventoEditando(evento);
    setFormData({
      Titulo: evento.Titulo,
      fecha: evento.fecha,
      lugar: evento.lugar,
      descripcion: evento.descripcion,
    });
    setMostrarModal(true);
  }

  // Guardar cambios del modal
  async function guardarEdicion(e) {
    e.preventDefault();
    await editEvento(eventoEditando.id, formData); // 👈 aquí mandamos los datos editados
    setMostrarModal(false);
    setEventoEditando(null);
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
              onEditar={() => abrirModalEditar(ev)} // ✅ ahora sí abrimos el modal
              onToggleEstado={() => cambiarEstado(ev.id, ev.estado)}
              onInscribir={() => inscribir(ev.id)}
            />
          ))}
        </tbody>
      </table>

      {/* Modal de edición */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Evento</h3>
            <form onSubmit={guardarEdicion}>
              <label>
                Título:
                <input
                  type="text"
                  value={formData.Titulo}
                  onChange={(e) => setFormData({ ...formData, Titulo: e.target.value })}
                />
              </label>
              <label>
                Fecha:
                <input
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                />
              </label>
              <label>
                Lugar:
                <input
                  type="text"
                  value={formData.lugar}
                  onChange={(e) => setFormData({ ...formData, lugar: e.target.value })}
                />
              </label>
              <label>
                Descripción:
                <textarea
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                />
              </label>

              <button type="submit">Guardar cambios</button>
              <button type="button" onClick={() => setMostrarModal(false)}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Eventos;




