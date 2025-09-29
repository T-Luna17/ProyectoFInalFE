function ListaInscritos({ inscritos }) {
  return (
    <div className="columna izquierda">
      <h2>Mis inscripciones</h2>
      {inscritos.length === 0 ? (
        <p>No estás inscrito en ningún evento</p>
      ) : (
        <ul>
          {inscritos.map((ev) => (
            <li key={ev.id}>
              <strong>{ev.nombre}</strong> - {ev.fecha}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaInscritos;
