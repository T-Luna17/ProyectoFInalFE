import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../services/services";

function Registrarse() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setTipo] = useState("UsuarioV");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  async function manejarRegistro(e) {
    e.preventDefault();

    if (!nombre || !apellido || !email || !password || !rol) {
      setMensaje("⚠️ Llena todos los campos");
      return;
    }

    try {
      const nuevoUsuario = { nombre, apellido, email, password, rol };
      const saved = await registrarUsuario(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(saved));
      setMensaje("✅ Registro exitoso");

      setTimeout(() => {
        navigate("/Sesion"); // ir a login
      }, 1000);
    } catch {
      setMensaje("❌ Error al registrar");
    }
  }

  return (
    <form className="form-container" onSubmit={manejarRegistro}>
      <h1>REGISTRARSE</h1>

      <label>Nombre</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

      <label>Apellido</label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />

      <label>Correo</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Contraseña</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label>Tipo de Usuario</label>
      <select value={rol} onChange={(e) => setTipo(e.target.value)}>
        <option value="Organización">Organización</option>
        <option value="UsuarioV">Usuario Voluntario</option>
      </select>

      <button type="submit">Registrarse</button>
      <p className="mensaje">{mensaje}</p>
    </form>
  );
}

export default Registrarse;


