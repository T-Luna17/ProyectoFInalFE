import Mision from "../components/Mision";
import Vision from "../components/Vision";
import Valores from "../components/Valores";
import "../style/SobreNosotros.css";
import NavBarLP from "../components/LadingPage/NavBarLP";
import FooterLP from "../components/LadingPage/FooterLP";

function SobreNosotros() {
  return (
    <>
    <NavBarLP />
    <div className="sobrenosotros">
        <Mision />
        <Vision />
        <Valores />
    </div>
    <FooterLP />
    </>
  )
}

export default SobreNosotros
