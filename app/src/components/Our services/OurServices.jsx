import SubTitle from "../Commons/SubTitle/SubTitle";
import BoxTree from "../Commons/BoxTree/BoxTree";
import styles from "./ourServices.module.css";

function OurServices() {
  return (
    <section id="servicios">
      <SubTitle
        title="Nuestros Servicios"
        src="/SVG/servicios.svg"
        alt="servicios"
        size={"30px"}
      />
      <div className={styles.container}>
        <BoxTree />
        <img
          className={styles.img}
          src="/img/ourServices.webp"
          alt="nuestros servicios"
        />
      </div>
    </section>
  );
}

export default OurServices;
