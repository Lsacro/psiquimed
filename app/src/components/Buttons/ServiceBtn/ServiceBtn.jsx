import styles from "./serviceBtn.module.css";
import { useState } from "react";

function ServiceBtn({ terapia, servicios }) {
  if (!terapia) return null;
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.arrow}
        src="/SVG/arrowDown.svg"
        alt="flecha hacia abajo"
      />
      <button onClick={handleClick} className={styles.button1}>
        {terapia}
      </button>
      {hidden && (
        <div className={styles.list}>
          {servicios.map((p, index) => (
            <p key={index}> - {p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServiceBtn;
