import SubTitle from "../Commons/SubTitle/SubTitle";
import Map from "../GoogleMaps/Map/Map";

function Mapa() {
  return (
    <section id="ubicacion">
      <SubTitle
        title="Ubicación"
        src="/SVG/servicios.svg"
        alt="servicios"
        size={"30px"}
      />
      <Map />
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        id="resenas"
        className="elfsight-app-4f8f534c-3e1c-4576-b9e6-3dee8e514b0e"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
}

export default Mapa;
