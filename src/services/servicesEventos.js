export const API_URL = "http://localhost:3001";

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

// Inscribir usuario logueado
export async function inscribirEnEvento(eventoId, usuarioId) {
  const res = await fetch(`${API_URL}/eventos/${eventoId}`);
  if (!res.ok) throw new Error("Error al obtener evento");
  const evento = await res.json();

  if (evento.inscritos.includes(usuarioId)) {
    return { yaInscrito: true };
  }

  const inscritosActualizados = [...evento.inscritos, usuarioId];

  const resUpdate = await fetch(`${API_URL}/eventos/${eventoId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inscritos: inscritosActualizados }),
  });

  if (!resUpdate.ok) throw new Error("Error al inscribirse");
  return await resUpdate.json();
}


