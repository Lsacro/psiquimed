import styles from "./boxTree.module.css";

function BoxTree() {
  const group1 = {
    name: "Niños (12 meses a 10 años)",
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
    name: "Adolescentes (11 a 19 años)",
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
    name: "Adultos (20 a 59 años)",
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
    name: "Adultos Mayores (60+ años)",
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
    individualTherapies: [
      "Acompañamiento emocional en el proceso de envejecimiento",
      "Manejo de duelo, insomnio, depresión, ansiedad, pérdida de memoria, esquizofrenia",
      "Psicoterapia cognitivo-conductual",
      "Evaluación geriátrica",
    ],
    groupTherapies: [
      "Empresas : Salud mental laboral",
      "Instituciones educativas: escuela para padres",
    ],
  };

  const allGroups = [group1, group2, group3, group4, group5];

  return (
    <section>
      <div className={styles.wrapper}>
        <ul>
          {allGroups.map((group, index) => {
            return (
              <li key={index}>
                <input type="checkbox" id={`list-item-${index}`} />
                <label htmlFor={`list-item-${index}`}>
                  <h2>{group.name}</h2>
                  <img src="SVG/dropdown.svg" alt="menu desplegable" />
                </label>
                <ul>
                  <h3>Terapias Individuales</h3>
                  {group.individualTherapies.map((p, index) => {
                    return <li key={index}>{p}</li>;
                  })}
                  <h3>Terapias Grupales</h3>
                  {group.groupTherapies.map((p, index) => {
                    return <li key={index}>{p}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default BoxTree;
