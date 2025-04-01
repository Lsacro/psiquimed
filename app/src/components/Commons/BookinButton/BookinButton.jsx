import styles from "./bookinButton.module.css";

function BookinButton({ name }) {
  return (
    <div className={styles.button}>
      <a
        href="https://wa.me/593998964126"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{name}</p>
      </a>
    </div>
  );
}

export default BookinButton;
