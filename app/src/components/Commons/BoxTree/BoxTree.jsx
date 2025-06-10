import YoutubeVideo from "../../Videos/YoutubeVideo/YoutubeVideo";
import styles from "./boxTree.module.css";

import OurServicesBtn from "@/components/Buttons/OurServicesBtn/OurServicesBtn";

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
    video: "/videos/Psiquimed3.mp4",
    img: "/videos/preview3.jpg",
    video2: "/videos/Psiquimed3.mp4",
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
    video: "/videos/Psiquimed4.mp4",
    img: "/videos/preview4.jpg",
    video2: "/videos/Psiquimed4.mp4",
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
    video: "/videos/Psiquimed5.mp4",
    img: "/videos/preview5.jpg",
    video2: "/videos/Psiquimed5.mp4",
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
    video: "/videos/Psiquimed6.mp4",
    img: "/videos/preview6.jpg",
    video2: "/videos/Psiquimed6.mp4",
  };
  const group5 = {
    name: "Servicios de consultoría",
    groupTherapies: [
      "Empresas : Salud mental laboral",
      "Instituciones educativas: escuela para padres",
    ],
  };

  const allGroups = [group1, group2, group3, group4, group5];

  return (
    <div className={styles.upContainer}>
      {allGroups.map((group, index) => {
        return (
          <div className={styles.container} key={index}>
            <OurServicesBtn
              name={group.name.toUpperCase()}
              individual={group.individualTherapies || ""}
              group={group.groupTherapies}
              video={group.video || ""}
              img={group.img || ""}
              video2={group.video2 || ""}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BoxTree;
