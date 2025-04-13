import ServiceBtn from "../ServiceBtn/ServiceBtn";
import styles from "./ourServicesBtn.module.css";
import { useState } from "react";

function OurServicesBtn({ name, individual, group }) {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button1}>
        {name}
      </button>
      {hidden && (
        <div className={styles.hidden}>
          <ServiceBtn
            terapia={individual ? "Terapia Individual" : ""}
            servicios={individual || null}
          />
          <ServiceBtn terapia="Terapia Grupal" servicios={group} />
        </div>
      )}
    </div>
  );
}

export default OurServicesBtn;
