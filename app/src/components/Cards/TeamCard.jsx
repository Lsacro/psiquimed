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
      img: "SVG/doctores/kath.webp",
    },
    {
      id: 2,
      name: "Dr. María Agsuta Rivera",
      titulo: "Médico Psiquiatra",
      especialidades: [
        "28 años de experiencia",
        "Psicoterápia procesal sistema",
        "Neurobiología del comportamiento",
      ],
      img: "SVG/doctores/aug.webp",
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
      img: "SVG/doctores/sebas.webp",
    },
    {
      id: 4,
      name: "Dr. Paola Zuñiga",
      titulo: "Médico Psiquiatra",
      especialidades: [
        "Especialista en Psiquiatría",
        "Arte Terapia",
        "Neurobiología del comportamiento",
      ],
      img: "SVG/doctores/pao.webp",
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
                  backgroundImage: `url(${info.img})`,
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
