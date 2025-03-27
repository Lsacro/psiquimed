import styles from "./navbar.module.css";
import "@/styles/variables.css";
import { useEffect, useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const workingHours = {
    lunes: "lunes de 08:00am a 09:00pm",
    martes: "martes de 08:00am a 09:00pm",
    miércoles: "miércoles de 08:00am a 09:00pm",
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
      <div className={styles.top}>
        <div>
          <div className={styles.topItemLeft}>{isOpen}</div>
          <div className={styles.topItemRight}>Email: psiquimed@gmail.com</div>
        </div>
        <div>
          <div className={styles.topItemRight}>
            <a href="https://www.facebook.com/psiquimed/?locale=es_LA">
              <img width={"36px"} src="/SVG/facebook.svg" alt="facebook svg" />
            </a>
            <a href="https://www.instagram.com/psiquimedec/">
              <img
                width={"36px"}
                src="/SVG/instagram.svg"
                alt="instagram svg"
              />
            </a>
            <a href="https://www.tiktok.com/@psiquimed">
              <img width={"36px"} src="/SVG/tiktok.svg" alt="Tik Tok svg" />
            </a>
          </div>
          <div className={styles.topItemRight}>
            <p>Contacto: 0999951096</p>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <img
          className={styles.logo}
          src="/Logo/logo.png"
          alt="logo psiquimed"
        />
        <div className={styles.menu}>
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
