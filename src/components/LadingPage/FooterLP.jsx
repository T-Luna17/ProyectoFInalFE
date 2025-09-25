import { Link } from "react-router-dom";

function FooterLP() {
  return (
    <footer className="footer">
      <p>© 2025 Alas Solidarias</p>
      <p>Contacto: <Link to="/contacto">alas.solidarias@gmail.com</Link></p>
      <p>Creado por: <Link to="https://github.com/T-Luna17" target="_blank">Tamy Luna</Link> ✨ | © 2025</p>
    </footer>
  );
}

export default FooterLP;
