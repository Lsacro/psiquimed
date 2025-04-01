import BackCard from "./BackCard";
import "./team-card.css";
import { useState } from "react";

const TeamCard = () => {
  const data = [
    {
      id: 1,
      name: "Dra. Paola Zuñiga",
      especialidades: [
        "Médico general - UCE",
        "Especialista en Psiquiatría - UTE",
        "Diplomado en arteterapia",
        "Formación en psicoterapia narrativa (posracionalista)",
        "Diplomado en neurolobiología del comportamiento",
        "Docente pregrado en ESPE",
      ],
      img: "/SVG/doctores/pao.jpg",
    },
    {
      id: 2,
      name: "Dra. Katherine Chérrez",
      especialidades: [
        "Médico general - UCE",
        "Especialista en psiquiatría – UTE",
        "Diplomado arteterapia",
        "Diplomado en neurolobiología del comportamiento",
        "Estudios superiores en psicoterapia individual grupo familia y pareja APSA",
        "Maestrante gerencia en salud - UTE",
      ],
      img: "/SVG/doctores/kath.jpg",
    },
    {
      id: 3,
      name: "Dr. Sebastián Vizcaíno",
      especialidades: [
        "Médico general - UCE",
        "Especialista en Psiquiatría – Pontificia Universidad Javeriana de Bogotá",
        "Maestrante en Bioética – Universidad internacional de Valencia",
        "Diplomado en cuidados paliativos – Universidad del Rosario",
        "Formación en terapia psicodinámica y psicoanálisis",
        "Docente pregrado en la USFQ",
      ],
      img: "/SVG/doctores/sebas.jpg",
    },
    {
      id: 4,
      name: "Dra. María Augusta Rivera",
      especialidades: [
        "Médico general - UCE",
        "Especialista en Psiquiatría - UCE",
        "Antropóloga - UCE",
        "Formación en psicoterapia sistémica (posracionalista)",
        "Docente posgrado en UCE",
      ],
      img: "/SVG/doctores/aug.jpg",
    },
    {
      id: 5,
      name: "Psi. Cl. Kimberly Treviño",
      especialidades: [
        "Psicóloga Clínica - Universidad Indoamérica",
        "Estudios en Trastorno por Déficit de Atención e Hiperactividad (TDAH) y Trastorno del Espectro Autista (TEA)",
        "Psicoterapia de pareja",
      ],
      img: "/SVG/doctores/kim.jpg",
    },
  ];

  return (
    <>
      {data.map((item) => {
        const [isFlipped, setIsFlipped] = useState(false);

        const handleFlip = () => {
          setIsFlipped(!isFlipped);
        };

        return (
          <div
            key={item.id}
            className={`flip-container ${isFlipped ? "flipped" : ""}`}
            onClick={handleFlip}
          >
            <div className="flipper">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className="front-text">
                  <h3>{item.name}</h3>
                </div>
              </div>
              <div className="back">
                <BackCard especialidades={item.especialidades} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
