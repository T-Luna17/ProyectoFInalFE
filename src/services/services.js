export const API_URL = "http://localhost:3001"; //Usuarios

// Traer todos los usuarios
export async function obtenerUsuarios() {
  const res = await fetch(`${API_URL}/usuarios`);
  if (!res.ok) throw new Error("Error al obtener usuarios");
  return await res.json();
}

// Registrar usuario
export async function registrarUsuario(usuario) {
  console.log(usuario);
  const res = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  if (!res.ok) throw new Error("Error al registrar usuario");
  return await res.json();
}
