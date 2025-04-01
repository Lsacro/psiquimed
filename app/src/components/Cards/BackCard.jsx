import styles from "./backCard.module.css";

function BackCard({ especialidades }) {
  return (
    <>
      {especialidades.map((t) => {
        return (
          <p key={t} className={styles.backCard}>
            {t}
          </p>
        );
      })}
    </>
  );
}

export default BackCard;
