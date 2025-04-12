import styles from "./backCard.module.css";

function BackCard({ especialidades }) {
  return (
    <div className={styles.backCard}>
      <img className={styles.img} src="Logo/logo 2.png" alt="logo psiquimed" />
      <h3 className={styles.name}>{especialidades.name.toUpperCase()}</h3>
      <div className={styles.text}>
        <p className={styles.special}> {especialidades.titulo.toUpperCase()}</p>
        <div className={styles.list}>
          {especialidades.especialidades.map((p, index) => (
            <div className={styles.item} key={index.toString()}>
              <img className={styles.icon} src="SVG/asterisk.svg" alt="" />
              <p className={styles.p}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackCard;
