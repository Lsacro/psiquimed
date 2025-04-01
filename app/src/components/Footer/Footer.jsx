import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="footer">
        <div></div>
        <div>
          <p>Copyright © 2024 All Rights Reserved.</p>
          <Link to="/privacy">Terminos y condiciones</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
