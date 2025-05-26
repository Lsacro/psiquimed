import BackCard from "./BackCard";
import "./team-card.css";
import { useState } from "react";

const TeamCard = () => {
  const data = [
    {
      id: 1,
      name: "Dr. Katherine Chérrez",
      titulo: "Médico Psiquiatra",
      especialidades: [
        "Especialista en Psiquiatría",
        "Psicoterapia/ Individuales/ Familiares/ Grupos",
        "Neurobiología del comportamiento",
      ],
      img: "/doctores/Kath.webp",
    },
    {
      id: 2,
      name: "Dr. María Augusta Rivera",
      titulo: "Médico Psiquiatra",
      especialidades: [
        "28 años de experiencia",
        "Psicoterápia procesal sistema",
        "Neurobiología del comportamiento",
      ],
      img: "/doctores/Maria.webp",
    },
    {
      id: 3,
      name: "Dr. Sebastián Vizcaino",
      titulo: "Médico Psiquiatra",
      especialidades: [
        "Especialista en Psiquiatría",
        "Psicoterapia/Psicoanálisis",
        "Psicoterapia Procesal Sistémica",
      ],
      img: "/doctores/Sebas.webp",
    },
    {
      id: 4,
      name: "Dr. Paola Zúñiga Guevara",
      titulo: "Médico Psiquiatra",
      especialidades: [
        "Especialista en Psiquiatría",
        "Arte Terapia",
        "Neurobiología del comportamiento",
      ],
      img: "/doctores/Pao.webp",
      link: "https://www.linkedin.com/in/paola-elizabeth-zu%C3%B1iga-guevara-96a43a261/?originalSubdomain=ec",
    },
    {
      id: 5,
      name: "Dr. Priscila Catucuamba",
      titulo: "Terapeuta del Lenguaje",
      especialidades: [
        "Diplomado en técnica ABA",
        "Intervención al TEA y TDAH",
        "Neuro rehabilitación y estimulación sensorial",
      ],
      img: "/doctores/Pris.webp",
    },
    {
      id: 6,
      name: "Psic. Karla Gutiérrez",
      titulo: "Psicóloga clínica",
      especialidades: [
        "Psicóloga infantil y psicorrehabilitadora",
        "Especialización superior en cuidados paliativos",
        "Neuropsicologa de la Universidad Israel",
      ],
      img: "/doctores/Karla.webp",
    },
    {
      id: 7,
      name: "Lic. Melanie Zabala",
      titulo: "Fisioterapeuta",
      especialidades: [
        "Especializada en ejercicio terapéutico",
        "Experiencia en rehabilitación y prevención",
        "Formación continua en lesiones musculoesqueléticas",
      ],
      img: "/doctores/Melani.webp",
    },
    {
      id: 8,
      name: "Psic. Kimberly Trevino",
      titulo: "Psicóloga clínica",
      especialidades: [
        "Psicóloga con experiencia clínica",
        "Especializada en TDAH y TEA con enfoque Denver y ABA",
        "Formación en primeros auxilios psicológicos y crisis",
      ],
      img: "/doctores/Kim.webp",
    },
    {
      id: 9,
      name: "Dra. Pamela Sánchez",
      titulo: "Especialista en geriatría",
      especialidades: [
        "Especialista en Geriatría",
        "Máster en Neuropsicología Clínica",
        "Patologías crónicas en adultos mayores",
      ],
      img: "/doctores/Pamela.webp",
    },
    {
      id: 10,
      name: "Psic. María Belén Villacis",
      titulo: "Psicóloga clínica",
      especialidades: [
        "Magister en sexología clínica y terapia de pareja",
        "Psicoterapia individual/ familiar y de pareja ",
        "Sexología clínica",
      ],
      img: "/doctores/MariaBelen.webp",
    },
  ];

  return (
    <>
      {data.map((info) => {
        const [isFlipped, setIsFlipped] = useState(false);

        const handleFlip = () => {
          setIsFlipped(!isFlipped);
        };

        return (
          <div
            key={info.id}
            className={`flip-container ${isFlipped ? "flipped" : ""}`}
            onClick={handleFlip}
          >
            <div className="flipper">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${info.img}), radial-gradient(51.74% 45.16% at 46.65% 38%,#f6f7f8 0%, #98A2AA 44.58%, #98A2AA 100% )`,
                  backgroundSize: "contain",
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="up-text">
                  <img src="SVG/rotateArrow.svg" alt="Flecha de rotación" />
                </div>
                <div className="front-text">
                  <h3>{info.name}</h3>
                  <a href={info.link} target="_blank">
                    <img
                      src="SVG/linkedIn.svg"
                      alt="Logo LinkedIn"
                      width={"35px"}
                    />
                  </a>
                </div>
              </div>
              <div className="back">
                <BackCard especialidades={info} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
