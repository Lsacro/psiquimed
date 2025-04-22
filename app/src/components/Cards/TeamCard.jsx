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
      img: "SVG/doctores/Kath.webp",
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
      img: "SVG/doctores/Maria.webp",
    },
    {
      id: 3,
      name: "Dr. Sebastián Vizcaino",
      titulo: "Médico de la Univerdidad Central del Ecuador",
      especialidades: [
        "Especialista en Psiquiatría",
        "Psicoterapia/Psicoanálisis",
        "Psicoterapia Procesal Sistémica",
      ],
      img: "SVG/doctores/Sebas.webp",
    },
    {
      id: 4,
      name: "Dr. Paola Zúñiga",
      titulo: "Médico Psiquiatra",
      especialidades: [
        "Especialista en Psiquiatría",
        "Arte Terapia",
        "Neurobiología del comportamiento",
      ],
      img: "SVG/doctores/Pao.webp",
    },
    {
      id: 5,
      name: "Dr. Priscila Catucuamba",
      titulo: "Terapeuta del Lenguaje de la UCE",
      especialidades: [
        "Diplomado en técnica ABA",
        "Intervención al TEA y TDAH",
        "Neuro rehabilitación y estimulación sensorial",
      ],
      img: "SVG/doctores/Pris.webp",
    },
    {
      id: 6,
      name: "Karla Gutiérrez",
      titulo: "",
      especialidades: [],
      img: "SVG/doctores/Karla.webp",
    },
    {
      id: 7,
      name: "Melanie Zabala",
      titulo: "",
      especialidades: [],
      img: "SVG/doctores/Melani.webp",
    },
    {
      id: 8,
      name: "Kimberly Trevino",
      titulo: "",
      especialidades: [],
      img: "SVG/doctores/Kim.webp",
    },
    {
      id: 9,
      name: "Pamela Sánchez",
      titulo: "",
      especialidades: [],
      img: "SVG/doctores/Pamela.webp",
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
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="front-text">
                  <h3>{info.name}</h3>
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
