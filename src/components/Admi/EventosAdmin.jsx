import { useEffect, useState } from "react";
import { getEventos, deleteEvento, toggleEstado } from "../../services/servicesEventos";

function EventosAdmin() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function fetchEventos() {
      const data = await getEventos();
      setEventos(data);
    }
    fetchEventos();
  }, []);

  async function eliminar(id) {
    await deleteEvento(id);
    setEventos(eventos.filter((e) => e.id !== id));
  }

  async function cambiarEstado(id, estado) {
    const actualizado = await toggleEstado(id, estado);
    setEventos(eventos.map((e) => (e.id === id ? actualizado : e)));
  }

  return (
    <div className="card">
      {eventos.length > 0 ? (
        <ul>
          {eventos.map((e) => (
            <li key={e.id}>
              <strong>{e.evento}</strong> - {e.estado}
              <button onClick={() => cambiarEstado(e.id, e.estado)}>
                {e.estado === "activo" ? "Desactivar" : "Activar"}
              </button>
              <button onClick={() => eliminar(e.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay eventos creados</p>
      )}
    </div>
  );
}

export default EventosAdmin;

