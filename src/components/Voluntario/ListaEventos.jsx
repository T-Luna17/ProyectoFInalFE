function ListaEventos({ eventos, onInscribirse }) {
  return (
    <div className="columna derecha">
      <h2>Eventos disponibles</h2>
      <ul>
        {eventos.map((ev) => (
          <li key={ev.id}>
            <div className="evento-info">
              <span>
                <strong>{ev.evento}</strong> ({ev.fecha})
                <br />
                <strong>{ev.lugar}</strong>
                <br />
                <strong>{ev.nombreOrganizacion}</strong>

              </span>
              <span
                className={`estado ${ev.estado === "ACTIVO" ? "activo" : "desactivado"}`}
              >
                {ev.estado}
              </span>
              {ev.estado === "activo" && (
                <button className="btn-inscribirse" onClick={() => onInscribirse(ev)}>
                  Inscribirse
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEventos;
