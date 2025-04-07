import TeamCard from "../Cards/TeamCard";
import "./ourTeam.css";
import SubTitle from "../Commons/SubTitle/SubTitle";

const OurTeam = () => {
  return (
    <section id="equipo">
      <div>
        <SubTitle
          title="Nuestro Equipo"
          size={"30px"}
          alt={"equipo"}
          src={"/SVG/equipo.svg"}
        />
        <div className="our-team">
          <TeamCard />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
