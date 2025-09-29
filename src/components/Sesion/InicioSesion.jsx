import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {obtenerUsuarios} from "../../services/services";

function IniciarSesion() {
  const [identificador, setIdentificador] = useState(""); // ID o correo
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  async function manejarLogin(e) {
    e.preventDefault();
    const usuariosRegistrados = await obtenerUsuarios()
    if (!identificador || !password) {
      setMensaje("⚠️ Llena todos los campos");
      return;
    }
    const usuarioEncontradoOrganizacion = usuariosRegistrados.find(u => u.email === identificador && u.password === password && u.rol === "Organización")
    if (usuarioEncontradoOrganizacion) {
        localStorage.setItem("usuario", JSON.stringify(usuarioEncontradoOrganizacion));
        alert("✅ Sesión exitosa");
        navigate("/organizacion")
        return
    }
    const usuarioEncontrado = usuariosRegistrados.find(u => u.email === identificador && u.password === password && u.rol === "UsuarioV")
    if (usuarioEncontrado) {
        localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
        alert("✅ Sesión exitosa usuario");
        navigate("/Voluntario")
        return
    }
  }

  return (
    <form className="form-container">
      <h1>INICIO DE SESIÓN</h1>

      <label>ID o Correo</label>
      <input
        type="text"
        value={identificador}
        onChange={(e) => setIdentificador(e.target.value)}
        required
      />

      <label>Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button onClick={manejarLogin} type="submit">Iniciar Sesión</button>
      <p className="mensaje">{mensaje}</p>
    </form>
  );
}

export default IniciarSesion;






