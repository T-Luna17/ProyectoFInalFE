function Perfil({ usuario }) {
  return (
    <section className="perfil">
      <div className="foto">🧑</div>
      <h2>{usuario.nombre} {usuario.apellido}</h2>
      <p>Email: {usuario.email}</p>
      <p>Rol: {usuario.rol}</p>
      <p>Edad: {usuario.edad || "No registrada"}</p>
    </section>
  );
}

export default Perfil;
