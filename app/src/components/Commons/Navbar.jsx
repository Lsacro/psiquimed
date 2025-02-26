import "./navbar.css";
import "../../styles/variables.css";
import { useEffect, useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const workingHours = {
    lunes: "lunes de 08:00am a 09:00pm",
    martes: "martes de 08:00am a 09:00pm",
    miercoles: "miercoles de 08:00am a 09:00pm",
    jueves: "jueves de 08:00am a 09:00pm",
    viernes: "viernes de 08:00am a 09:00pm",
    sabado: "sábado de 08:00am a 09:00pm (previa cita)",
    domingo: "Cerrado",
  };

  useEffect(() => {
    const today = new Date();
    const day = today.toLocaleDateString("es-ES", { weekday: "long" });
    const hours = workingHours[day];
    setIsOpen(hours);
  }, []);

  return (
    <>
      <div className="top">
        <div>
          <div className="top-item-left">Horario: {isOpen}</div>
          <div className="top-item-right">Email: psiquimed@gmail.com</div>
        </div>
        <div>
          <div className="top-item-left">
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Tik Tok</a>
          </div>
          <div className="top-item-right">
            <p>Contacto: 0999951096</p>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <img className="logo" src="/Logo/logo.png" alt="logo psiquimed" />
        <div className="menu">
          <a href="">Inicio</a>
          <a href="">Quines Somos</a>
          <a href="">Servicios</a>
        </div>
        <button>
          <a href="">Agendar una Cita</a>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
