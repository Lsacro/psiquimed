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
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.text}>
              <h4 className={styles.h4}>Psicología</h4>
              <div className={styles.list}>
                <p>Psicoterapia individual</p>
                <p>Psicoterapia de pareja</p>
                <p>Atención de niños y niñas</p>
                <p>Trastornos de la conducta, nuerodesarrollo</p>
                <p>
                  Trastorno por Déficit de Atención e Hiperactividad (TDAH) y
                  Trastorno del Espectro Autista (TEA)
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.text}>
              <h4 className={styles.h4}>
                Atención del adolescente y del adulto
              </h4>
              <div className={styles.list}>
                <p>Psicoterapia por psiquiatría</p>
                <p>Trastornos de ansiedad</p>
                <p>TOC</p>
                <p>Trastornos afectivos (T. bipolar, T, depresivos)</p>
                <p>Trastornos psicóticos (esquizofrenia)</p>
                <p>Trastornos de la conducta alimentaria</p>
                <p>
                  Conductas de riesgo (cutting, conducta suicida, consumo de
                  sustancias)
                </p>
                <p>Trastornos del sueño</p>
                <p>Vínculos y disfunción familiar</p>
                <p>Violencia de género</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.text}>
              <h4 className={styles.h4}>Atención del adulto mayor</h4>
              <div className={styles.list}>
                <p>Trastornos neurocognitivos (Alzheimer, y otras demencias)</p>
                <p>
                  Valoración interdisciplinaria (psiquiatría, geriatría,
                  fisioterapia)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
