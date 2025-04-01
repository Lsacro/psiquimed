import styles from "./subtitle.module.css";

function SubTitle({ title, src, alt, size }) {
  return (
    <div className={styles.subtitle}>
      <img width={size} src={src} alt={alt} />
      <h3 className={styles.title3}>{title}</h3>
    </div>
  );
}

export default SubTitle;
