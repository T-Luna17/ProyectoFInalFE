import { useState } from "react";

function SectionAdmin({ titulo, children }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <section className="section-admin">
      <button className="toggle-btn" onClick={() => setAbierto(!abierto)}>
        {abierto ? "🔽" : "▶️"} {titulo}
      </button>
      {abierto && <div className="contenido">{children}</div>}
    </section>
  );
}

export default SectionAdmin;
