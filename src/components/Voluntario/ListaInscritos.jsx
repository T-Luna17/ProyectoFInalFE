function ListaInscritos({ inscritos }) {
  async function desinscribirse(inscripcion) {
    const objInscripcion = {
      estado: inscripcion.estado === "activo" ? "desactivado" : "activo",
    }
    const peticion = await fetch(`http://localhost:3001/inscritos/${inscripcion.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objInscripcion),
    });
    console.log(peticion);
    
  }
  return (
    <div className="columna izquierda">
      <h2>Mis inscripciones</h2>
      {inscritos.length === 0 ? (
        <p>No estás inscrito en ningún evento</p>
      ) : (
        <ul>
          {inscritos.map((ev) => (
            <li key={ev.id}>
              <strong>{ev.nombreEvento}</strong>
              <br />
              <strong>{ev.nombreOrganizacion}
              </strong> - {ev.fecha}
              <button className="btn-inscribirse" onClick={() => desinscribirse(ev)}>Desinscribirse</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaInscritos;
