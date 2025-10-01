import { editUsuario } from "../../services/servicesEventos";
import { useState } from "react";

function Perfil({ usuario }) {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [nuevaEdad, setNuevaEdad] = useState("");

  // 👉 nuevo estado para foto
  const [mostrarFotoInput, setMostrarFotoInput] = useState(false);
  const [nuevaFoto, setNuevaFoto] = useState(usuario.foto || "");

  async function editarEdad() {
    const res = await editUsuario(usuario.id, { edad: nuevaEdad });
    console.log(res);
    setMostrarInput(false);
  }

  // 👉 nueva función para editar foto
  async function editarFoto() {
    const res = await editUsuario(usuario.id, { foto: nuevaFoto });
    console.log(res);
    setMostrarFotoInput(false);
  }

  return (
    <section className="perfil">
      <div className="foto">
        {usuario.foto ? (
          <img src={usuario.foto} alt="Foto de perfil" className="foto-perfil" />
        ) : (
          "🧑"
        )}
        {/* 👉 Botón camarita */}
        <button onClick={() => setMostrarFotoInput(!mostrarFotoInput)}>📷</button>
      </div>

      <h2>
        {usuario.nombre} {usuario.apellido}
      </h2>
      <p>Email: {usuario.email}</p>
      <p>Rol: {usuario.rol}</p>
      <p>Edad: {usuario.edad || "No registrada"}</p>

      <button onClick={() => setMostrarInput(!mostrarInput)}>Editar edad</button>
      {mostrarInput && (
        <div className="nueva-edad">
          <input
            type="text"
            value={nuevaEdad}
            onChange={(e) => setNuevaEdad(e.target.value)}
          />
          <button onClick={editarEdad}>Guardar</button>
        </div>
      )}

      {/* 👉 Input y botón para nueva foto */}
      {mostrarFotoInput && (
        <div className="nueva-foto">
          <input
            type="text"
            placeholder="URL de la nueva foto"
            value={nuevaFoto}
            onChange={(e) => setNuevaFoto(e.target.value)}
          />
          <button onClick={editarFoto}>Guardar foto</button>
        </div>
      )}
    </section>
  );
}

export default Perfil;

