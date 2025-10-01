import NavbarAdmin from "../components/Admi/NavBarAdmin";
import UsuariosAdmin from "../components/Admi/UsuariosAdmin";
import EventosAdmin from "../components/Admi/EventosAdmin";
import InscripcionesAdmin from "../components/Admi/InscripcionesAdmin";
import Estadisticas from "../components/Admi/Estadisticas";
import SectionAdmin from "../components/Admi/SectionAdmin";
import "../style/Admi.css";

function AdminPage() {
  return (
    <div>
      <NavbarAdmin />

      <main style={{ padding: "20px" }}>
        <h1>Panel de Administración</h1>

        <SectionAdmin titulo="📊 Estadísticas">
          <Estadisticas />
        </SectionAdmin>

        <SectionAdmin titulo="👥 Usuarios">
          <UsuariosAdmin />
        </SectionAdmin>

        <SectionAdmin titulo="📅 Eventos">
          <EventosAdmin />
        </SectionAdmin>

        <SectionAdmin titulo="✅ Inscripciones">
          <InscripcionesAdmin />
        </SectionAdmin>
      </main>
    </div>
  );
}

export default AdminPage;
