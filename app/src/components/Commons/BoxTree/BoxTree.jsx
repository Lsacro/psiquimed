import styles from "./boxTree.module.css";

function BoxTree() {
  const group1 = {
    name: "Niños",
    individualTherapies: [
      "Evaluación emocional y del desarrollo (TDAH, Autismo)",
      "Psicoterapia infantil (juego-terapia, terapia conductual)",
      "Apoyo emocional ante crisis (duelo, separación de padres, trauma)",
      "Terapia de lenguaje",
      "Terapia ocupacional",
      "Psicopedagogía",
    ],
    groupTherapies: [
      "Evaluación emocional y del desarrollo (TDAH, Autismo)",
      "Psicoterapia infantil (juego-terapia, terapia conductual)",
      "Apoyo emocional ante crisis (duelo, separación de padres, trauma)",
      "Terapia de lenguaje",
      "Terapia ocupacional",
      "Psicopedagogía",
    ],
  };

  const group2 = {
    name: "Adolescentes",
    individualTherapies: [
      "Psicoterapia para manejo de ansiedad, depresión, anorexia, bulimia, conflictos de identidad y sexualidad",
      "Acompañamiento emocional y orientación vocacional",
    ],
    groupTherapies: [
      "Talleres de Arteterapia: artes plásticas y danza para fortalecer habilidades sociales, lenguaje corporal, autoestima y vínculos",
      "Escuela para padres de adolescentes: “Tengo un adolescente, ¡Auxilio!”",
    ],
  };
  const group3 = {
    name: "Adultos",
    individualTherapies: [
      "Psicoterapia individual (ansiedad, depresión, trastornos de personalidad, duelo, insomnio, trastorno bipolar, esquizofrenia)",
      "Psicoterapia de pareja y terapia familiar",
      "Psicoterapia para dificultades sexuales (eyaculación precoz, disfunción eréctil, anorgasmia)",
    ],
    groupTherapies: [
      "Talleres de Arteterapia: artes plásticas y danza para fortalecer habilidades sociales, lenguaje corporal, autoestima y vínculos",
    ],
  };
  const group4 = {
    name: "Adultos Mayores",
    individualTherapies: [
      "Acompañamiento emocional en el proceso de envejecimiento",
      "Manejo de duelo, insomnio, depresión, ansiedad, pérdida de memoria, esquizofrenia",
      "Psicoterapia cognitivo-conductual",
      "Evaluación geriátrica",
    ],
    groupTherapies: [
      "Cuidamos tu Memoria, Honramos tu Historia: taller para el acompañamiento en la pérdida de memoria",
      "Evaluación por fisioterapia",
    ],
  };
  const group5 = {
    name: "Servicios de consultoría",
    groupTherapies: [
      "Empresas : Salud mental laboral",
      "Instituciones educativas: escuela para padres",
    ],
  };

  const allGroups = [group1, group2, group3, group4];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list2}>
        {allGroups.map((group, index) => {
          return (
            <li key={index}>
              <input type="checkbox" id={`list-item-${index}`} />
              <label htmlFor={`list-item-${index}`}>
                <h3 className={styles.ageGroup}>{group.name.toUpperCase()}</h3>
              </label>
              <ul className={styles.list}>
                <img src="/SVG/arrowDown.svg" alt="flecha hacia abajo" />
                <h4 className={styles.title}>Terapias Individuales</h4>
                <ul className={styles.list1}>
                  {group.individualTherapies?.map((p, index) => {
                    return <li key={index}>{p}</li> || "";
                  })}
                </ul>
                <img src="/SVG/arrowDown.svg" alt="flecha hacia abajo" />

                <h4 className={styles.title}>Terapias Grupales</h4>
                <ul className={styles.list1}>
                  {group.groupTherapies.map((p, index) => {
                    return <li key={index}>{p}</li>;
                  })}
                </ul>
              </ul>
            </li>
          );
        })}
        {
          <li>
            <input type="checkbox" id={`list-item-5`} />
            <label htmlFor={`list-item-5`}>
              <h3 className={styles.ageGroup}>{group5.name.toUpperCase()}</h3>
            </label>
            <ul className={styles.list}>
              <img src="/SVG/arrowDown.svg" alt="flecha hacia abajo" />
              <h4 className={styles.title}>Terapias Grupales</h4>
              <ul className={styles.list1}>
                {group5.groupTherapies?.map((p, index) => {
                  return <li key={index}>{p}</li> || "";
                })}
              </ul>
            </ul>
          </li>
        }
      </ul>
    </div>
  );
}

export default BoxTree;
