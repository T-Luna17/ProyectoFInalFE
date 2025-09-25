import React, { useEffect, useState } from "react";

function ListaInscritos({ eventoId }) {
  const [usuarios, setUsuarios] = useState([]);
  const [inscritos, setInscritos] = useState([]);

  useEffect(() => {
    // Traer usuarios
    fetch("http://localhost:3001/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));

    // Traer inscritos
    fetch("http://localhost:3001/inscritos")
      .then((res) => res.json())
      .then((data) => setInscritos(data));
  }, []);

  // Filtrar inscritos de este evento y obtener nombres
  const nombresInscritos = inscritos
    .filter((i) => i.eventoId === eventoId)
    .map((i) => {
      const usuario = usuarios.find((u) => u.id === i.usuarioId);
      return usuario ? usuario.nombre : "Usuario no encontrado";
    });

  if (nombresInscritos.length === 0) return <p>No hay inscritos aún.</p>;

  return (
    <div>
      <h4>Inscritos:</h4>
      <ul>
        {nombresInscritos.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaInscritos;
