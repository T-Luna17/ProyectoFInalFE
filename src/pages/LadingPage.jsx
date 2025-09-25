import FooterLP from "../components/LadingPage/FooterLP";
import Hero from "../components/LadingPage/Hero";
import NavBarLP from "../components/LadingPage/NavBarLP";
import "../style/Lading.css";

function LadingPage() {
  return (
    <div className="lading-container">
      <NavBarLP />
      <Hero />
      <FooterLP />
    </div>
  )
}

export default LadingPage;

