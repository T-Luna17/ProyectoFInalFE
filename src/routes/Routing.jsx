import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LadingPage from "../pages/LadingPage"
import Sesion from "../pages/Sesion"
import SobreNosotros from "../pages/SobreNosotros"
import PerfilPage from "../pages/PerfilPage"
import Organizacion from "../pages/Organizacion"
import Voluntario from "../pages/Voluntario"
import AdminPage from "../pages/AdmiPage"
import PrivateRoute from "./PrivateRoute"
function Routing() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LadingPage />} />
        <Route path="/Sesion" element={<Sesion />} />
        <Route path="/nosotros" element={<SobreNosotros />} />

        {/* Perfil */}
          <Route path="/perfil" element={<PrivateRoute children={<PerfilPage />} />} />

        {/* Organización */}
        <Route path="/organizacion" element={<PrivateRoute children={<Organizacion/>} />} />

        {/* Voluntario */}
          <Route path="/Voluntario" element={<PrivateRoute children={<Voluntario/>} />} />

        {/* Admin */}
        <Route path="/Admi" element={<PrivateRoute children={<AdminPage />} />} />
      </Routes>
    </Router>
  )
}

export default Routing;

