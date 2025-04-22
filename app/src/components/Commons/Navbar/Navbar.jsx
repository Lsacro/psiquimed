import styles from "./navbar.module.css";
import "@/styles/variables.css";
import { useEffect, useState } from "react";
import BookinButton from "../BookinButton/BookinButton";
import NavbarMenu from "../../Navigation/NavbarMenu/NavbarMenu";
import BottonNavigation from "../../Navigation/BottonNavigation/BottonNavigation";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const workingHours = {
    lunes: "08:00am a 09:00pm",
    martes: "08:00am a 09:00pm",
    miércoles: "08:00am a 09:00pm",
    jueves: "08:00am a 09:00pm",
    viernes: "08:00am a 09:00pm",
    sábado: "Previa Cita",
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
      <div className={styles.diplayNone}>
        <div>
          <div className={styles.diplayNone}>
            <img className={styles.icon} src="/SVG/clock.svg" alt="clock svg" />
            <span>Horario: </span> <p>{isOpen}</p>
          </div>
          <div className={` ${styles.diplayNone} ${styles.diplay}`}>
            <img className={styles.icon} src="/SVG/mail.svg" alt="" />
            <p>
              <span>Email: </span>psiquimed@gmail.com
            </p>
          </div>
        </div>
        <div>
          <div className={styles.diplayNone}>
            <span>Contacto: </span>
            <p>0998964126</p>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <img
          className={styles.logo}
          src="/Logo/logo_horizontal.webp"
          alt="logo psiquimed"
        />
        <div className={styles.navbarList}>
          <div className={styles.diplayNone}>
            <BottonNavigation />
          </div>
          <div>
            <NavbarMenu />
          </div>
        </div>
        <div className={styles.diplayNone}>
          <BookinButton name="Agendar Cita" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
