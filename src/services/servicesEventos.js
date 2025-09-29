export const API_URL = "http://localhost:3001"; 

// ======================
// USUARIOS
// ======================

// Obtener todos los usuarios
export async function getUsuarios() {
  const res = await fetch(`${API_URL}/usuarios`);
  if (!res.ok) throw new Error("Error al obtener usuarios");
  return await res.json();
}

// Obtener un usuario por id
export async function getUsuarioById(id) {
  const res = await fetch(`${API_URL}/usuarios/${id}`);
  if (!res.ok) throw new Error("Error al obtener usuario");
  return await res.json();
}

// Editar usuario (edad, disponibilidad, experiencia, habilidades, etc.)
export async function editUsuario(id, datosActualizados) {
  const res = await fetch(`${API_URL}/usuarios/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datosActualizados),
  });
  if (!res.ok) throw new Error("Error al editar usuario");
  return await res.json();
}

// ======================
// EVENTOS
// ======================

// Obtener todos los eventos 
export async function getEventos() { 
  const res = await fetch(`${API_URL}/eventos`); 
  if (!res.ok) throw new Error("Error al obtener eventos"); 
  return await res.json(); 
} 

// Eliminar evento 
export async function deleteEvento(id) { 
  const res = await fetch(`${API_URL}/eventos/${id}`, { method: "DELETE" }); 
  if (!res.ok) throw new Error("Error al eliminar evento"); 
} 

// Editar evento 
export async function editEvento(id, datosActualizados) { 
  const res = await fetch(`${API_URL}/eventos/${id}`, { 
    method: "PATCH", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify(datosActualizados), 
  }); 
  if (!res.ok) throw new Error("Error al editar evento"); 
  return await res.json(); 
} 

// Activar/Desactivar evento 
export async function toggleEstado(id, estado) { 
  const nuevoEstado = estado === "activo" ? "inactivo" : "activo"; 
  const res = await fetch(`${API_URL}/eventos/${id}`, { 
    method: "PATCH", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify({ estado: nuevoEstado }), 
  }); 
  if (!res.ok) throw new Error("Error al cambiar estado"); 
  return await res.json(); 
} 

// ======================
// INSCRIPCIONES
// ======================

// Inscribirse en un evento (se guarda en inscritos) 
export async function inscribirEnEvento(evento) { 
  const res = await fetch(`${API_URL}/inscritos`, { 
    method: "POST", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify(evento), 
  }); 
  if (!res.ok) throw new Error("Error al inscribirse"); 
  return await res.json(); 
} 

// Obtener las inscritos del usuario 
export async function getinscritos() { 
  const res = await fetch(`${API_URL}/inscritos`); 
  if (!res.ok) throw new Error("Error al obtener inscritos"); 
  return await res.json(); 
}


