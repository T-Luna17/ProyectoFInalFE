import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LadingPage from "../pages/LadingPage"
import Sesion from "../pages/Sesion"
import SobreNosotros from "../pages/SobreNosotros"
import PerfilPage from "../pages/PerfilPage"
import Organizacion from "../pages/Organizacion"
import Voluntario from "../pages/Voluntario"
import AdminPage from "../pages/AdmiPage"


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LadingPage/>} />
        <Route path="/Sesion" element={<Sesion/>} />
        <Route path="/nosotros" element={<SobreNosotros/>} />
        <Route path="/perfil" element={<PerfilPage/>} />
        <Route path="/organizacion" element={<Organizacion/>} />
        <Route path="/Voluntario" element={<Voluntario/>} />
        <Route path="/Admi" element={<AdminPage/>} />
      </Routes>
    </Router>
  )
}
export default Routing
