import styles from "./ourServices.module.css";
import SubTitle from "../Commons/SubTitle/SubTitle";

function OurServices() {
  return (
    <section>
      <div className={styles.ourServices}>
        <SubTitle
          title="Our Services"
          src="/SVG/servicios.svg"
          alt="servicios"
          size={"30px"}
        />
      </div>
    </section>
  );
}

export default OurServices;
