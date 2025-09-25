import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from '../pages/Inicio'
import LadingPage from "../pages/LadingPage"
import Sesion from "../pages/Sesion"
import SobreNosotros from "../pages/SobreNosotros"
import PerfilPage from "../pages/PerfilPage"
import Organizacion from "../pages/Organizacion"


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LadingPage/>} />
        <Route path="/Sesion" element={<Sesion/>} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/nosotros" element={<SobreNosotros/>} />
        <Route path="/perfil" element={<PerfilPage/>} />
        <Route path="/organizacion" element={<Organizacion/>} />
      </Routes>
    </Router>
  )
}
export default Routing
