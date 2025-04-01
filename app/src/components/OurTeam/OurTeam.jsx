import TeamCard from "../Cards/TeamCard";
import "./ourTeam.css";
import SubTitle from "../Commons/SubTitle/SubTitle";

const OurTeam = () => {
  return (
    <>
      <SubTitle
        title="Nuestro Equipo"
        size={"30px"}
        alt={"equipo"}
        src={"/SVG/equipo.svg"}
      />
      <div className="our-team">
        <TeamCard />
      </div>
    </>
  );
};

export default OurTeam;
