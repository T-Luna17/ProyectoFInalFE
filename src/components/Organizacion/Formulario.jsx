import { useState } from "react";

function Formulario() {
  const [evento, setEvento] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [errores, setErrores] = useState({});


  function validarCampos() {
    const nuevoErrores = {};
    if (!evento.trim()) nuevoErrores.evento = "El nombre del evento es obligatorio";
    if (!fecha.trim()) nuevoErrores.fecha = "La fecha y hora son obligatorias";
    if (!lugar.trim()) nuevoErrores.lugar = "El lugar es obligatorio";
    if (!descripcion.trim()) nuevoErrores.descripcion = "La descripción es obligatoria";
    setErrores(nuevoErrores);
    return Object.keys(nuevoErrores).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nombreOrganizacion = JSON.parse(localStorage.getItem("usuario")).nombre
    const idOrganizacion = JSON.parse(localStorage.getItem("usuario")).id
    const parseoFechaLugar = fecha.split("T")
    const fechaLugar = parseoFechaLugar[0]
    const horaLugar = parseoFechaLugar[1]
    if (!validarCampos()) return;

    const nuevaActividad = {
      evento,
      fecha: fechaLugar + " " + horaLugar,
      lugar,
      descripcion,
      estado: "activo",
      nombreOrganizacion,
      idOrganizacion
    };
    const peticion = await fetch(`http://localhost:3001/eventos`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaActividad)
      })
    const respuesta = await peticion.json()
    // limpiar formulario
    setEvento("");
    setFecha("");
    setLugar("");
    setDescripcion("");
    setErrores({});
    return respuesta
  }
  

  return (
    <aside className="formulario">
      <form>
        <label>Evento</label>
        <input
          type="text"
          value={evento}
          onChange={(e) => setEvento(e.target.value)}
        />
        {errores.evento && <p className="error">{errores.evento}</p>}

        <label>Fecha y hora</label>
        <input
          type="datetime-local"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        {errores.fecha && <p className="error">{errores.fecha}</p>}

        <label>Lugar</label>
        <input
          type="text"
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
        />
        {errores.lugar && <p className="error">{errores.lugar}</p>}

        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        {errores.descripcion && <p className="error">{errores.descripcion}</p>}

        <button className="guardar" type="button" onClick={handleSubmit}>
          Guardar
        </button>
      </form>
    </aside>
  );
}

export default Formulario;




