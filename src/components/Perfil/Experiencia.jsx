import { useState } from "react";
import { editUsuario } from "../../services/servicesEventos";

function Experiencia({ experiencia, usuario, setUsuario }) {
  const [editando, setEditando] = useState(false);
  const [nuevo, setNuevo] = useState("");

  const lista = experiencia ? experiencia.split(",") : [];

  const agregar = () => {
    if (!nuevo.trim()) return;
    const nuevaLista = [...lista, nuevo.trim()];
    actualizar(nuevaLista);
    setNuevo("");
  };

  const eliminar = (i) => {
    const nuevaLista = lista.filter((_, idx) => idx !== i);
    actualizar(nuevaLista);
  };

  const actualizar = async (nuevaLista) => {
    try {
      const actualizado = await editUsuario(usuario.id, { ...usuario, experiencia: nuevaLista.join(",") });
      setUsuario(actualizado);
    } catch (error) {
      console.error("Error guardando experiencia:", error);
    }
  };

  return (
    <section className="experiencia">
      <h3>Experiencia</h3>
      {editando ? (
        <div>
          <div className="chips">
            {lista.map((item, i) => (
              <span key={i} className="chip">
                {item} <button onClick={() => eliminar(i)}>x</button>
              </span>
            ))}
          </div>
          <input value={nuevo} onChange={(e) => setNuevo(e.target.value)} onKeyDown={e => e.key==="Enter" && agregar()} placeholder="Agregar experiencia" />
          <button onClick={agregar}>➕</button>
          <button onClick={() => setEditando(false)}>✔️ Listo</button>
        </div>
      ) : (
        <div>
          {lista.length > 0 ? lista.map((exp,i)=><p key={i}>{exp}</p>) : <p>No registrada</p>}
          <button onClick={() => setEditando(true)}>✏️ Editar</button>
        </div>
      )}
    </section>
  );
}

export default Experiencia;

