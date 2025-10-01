import { useEffect, useState } from "react";
import { getUsuarios, editUsuario } from "../../services/servicesEventos";

function UsuariosAdmin() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchUsuarios() {
      const data = await getUsuarios();
      setUsuarios(data);
    }
    fetchUsuarios();
  }, []);

  async function cambiarRol(id, rol) {
    const nuevoRol = rol === "voluntario" ? "organizacion" : "voluntario";
    const actualizado = await editUsuario(id, { rol: nuevoRol });
    setUsuarios(usuarios.map(u => (u.id === id ? actualizado : u)));
  }

  return (
    <div className="card">
      {usuarios.length > 0 ? (
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>
              {u.nombre} {u.apellido} - {u.rol}
              <button onClick={() => cambiarRol(u.id, u.rol)}>
                Cambiar Rol
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios registrados</p>
      )}
    </div>
  );
}

export default UsuariosAdmin;
