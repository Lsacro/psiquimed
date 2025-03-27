import styles from "./ourServices.module.css";

function OurServices() {
  return (
    <>
      <div>
        <p>Our Services</p>
        <h2>Comprehensice services for your health</h2>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Urology</h3>
            <p>
              Our neurology department provides expert care for conditions
              affecting the brain, spine, and nervous system
            </p>
            <img
              src="https://demo.awaikenthemes.com/dispnsary/wp-content/uploads/2024/12/service-img-1.jpg"
              alt="Urologia"
            />
          </div>
          <div className={styles.card}>
            <h3>Neurology</h3>
            <p>
              Our neurology department provides expert care for conditions
              affecting the brain, spine, and nervous system
            </p>
            <img
              src="https://demo.awaikenthemes.com/dispnsary/wp-content/uploads/2024/12/service-img-1.jpg"
              alt="Neurologia"
            />
          </div>
          <div className={styles.card}>
            <h3>Eye Care</h3>
            <p>
              Our neurology department provides expert care for conditions
              affecting the brain, spine, and nervous system
            </p>
            <img
              src="https://demo.awaikenthemes.com/dispnsary/wp-content/uploads/2024/12/service-img-1.jpg"
              alt="Eye Care"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
