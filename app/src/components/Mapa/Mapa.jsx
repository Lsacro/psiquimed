import SubTitle from "../Commons/SubTitle/SubTitle";
import Map from "../GoogleMaps/Map/Map";

function Mapa() {
  return (
    <section>
      <SubTitle
        title="Ubicación"
        src="/SVG/servicios.svg"
        alt="servicios"
        size={"30px"}
      />
      <Map />
    </section>
  );
}

export default Mapa;
