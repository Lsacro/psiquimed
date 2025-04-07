import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div id="footer" className={styles.footer}>
        <div className={styles.footerContainer}>
          <a
            href="https://www.facebook.com/psiquimed/?locale=es_LA"
            target="_blank"
          >
            <img
              className={styles.icon}
              src="/SVG/facebook.svg"
              alt="facebook svg"
            />
          </a>
          <a href="https://www.instagram.com/psiquimedec/" target="_blank">
            <img
              className={styles.icon}
              src="/SVG/instagram.svg"
              alt="instagram svg"
            />
          </a>
          <a href="https://www.tiktok.com/@psiquimed" target="_blank">
            <img
              className={styles.icon}
              src="/SVG/tiktok.svg"
              alt="Tik Tok svg"
            />
          </a>
        </div>
        <div>
          <p className={styles.last}>Copyright © 2025 All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
