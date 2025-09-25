function EventoFila({ evento, onEliminar, onEditar, onToggleEstado, onInscribir }) {
  const activo = evento.estado === "activo";

  return (
    <tr>
      <td>
        <strong>{evento.Titulo}</strong>
        <br />
        {evento.fecha} - {evento.lugar}
        <br />
        {evento.descripcion}
      </td>
      <td>
        <span className={activo ? "estado activo" : "estado inactivo"}>
          {evento.estado}
        </span>
      </td>
      <td>
        <button className="editar" onClick={onEditar}>
          Editar
        </button>
        <button className="eliminar" onClick={onEliminar}>
          Eliminar
        </button>
        <button className="inscripcion" onClick={onInscribir}>
          Inscribirse
        </button>
        <button className="activar" onClick={onToggleEstado}>
          {activo ? "Desactivar" : "Activar"}
        </button>
      </td>
    </tr>
  );
}

export default EventoFila;


