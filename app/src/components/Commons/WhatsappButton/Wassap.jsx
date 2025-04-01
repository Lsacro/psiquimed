import styles from "./wassap.module.css";

const Wassap = () => {
  return (
    <a
      href="https://wa.me/593998964126"
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default Wassap;
