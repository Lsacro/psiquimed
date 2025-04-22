import styles from "./map.module.css";

function Map() {
  return (
    <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4732.68938231685!2d-78.49526072431546!3d-0.18547423541514654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5a39e43cd75fd%3A0x8c4140fcdf6a0ce1!2sPSIQUIMED!5e1!3m2!1ses!2sec!4v1745349880064!5m2!1ses!2sec"></iframe>
    </div>
  );
}

export default Map;
