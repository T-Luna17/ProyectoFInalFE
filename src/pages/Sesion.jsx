import FormularioInicio from "../components/Sesion/InicioSesion";
import FormularioRegistro from "../components/Sesion/Registrarse";
import NavBarLogin from "../components/Sesion/NavBar";
import "../style/Sesion.css";

import { useState } from "react";
function Sesion() {
  const [mostrarFormularioInicio, setMostrarFormularioInicio] = useState(false);
  const [mostrarFormularioRegistro, setMostrarFormularioRegistro] = useState(true);

  const mostraRegistro = () =>{
    setMostrarFormularioRegistro(true)
    setMostrarFormularioInicio(false)
  }
  const mostraInicio = () =>{
    setMostrarFormularioRegistro(false)
    setMostrarFormularioInicio(true)
  }

  return (
  <div className="sesion-page">
    <NavBarLogin mostrarFormularioInicio={mostraInicio} mostrarFormularioRegistro={mostraRegistro}/>
    {mostrarFormularioInicio && <FormularioInicio />}
    {mostrarFormularioRegistro && <FormularioRegistro />}
  </div>
);
}

export default Sesion;