import { useState } from "react";
import { editUsuario } from "../../services/servicesEventos";

function Disponibilidad({ disponibilidad, usuario, setUsuario }) {
  const [editando, setEditando] = useState(false);
  const [valor, setValor] = useState(disponibilidad || "");

  const guardar = async () => {
    try {
      const actualizado = await editUsuario(usuario.id, { ...usuario, disponibilidad: valor });
      setUsuario(actualizado);
      setEditando(false);
    } catch (error) {
      console.error("Error guardando disponibilidad:", error);
    }
  };

  return (
    <section className="disponibilidad">
      <h3>Disponibilidad</h3>
      {editando ? (
        <div>
          <input value={valor} onChange={(e) => setValor(e.target.value)} />
          <button onClick={guardar}>💾 Guardar</button>
        </div>
      ) : (
        <div>
          <p>{disponibilidad || "No registrada"}</p>
          <button onClick={() => setEditando(true)}>✏️ Editar</button>
        </div>
      )}
    </section>
  );
}

export default Disponibilidad;
