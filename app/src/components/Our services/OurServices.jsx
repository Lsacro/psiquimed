import SubTitle from "../Commons/SubTitle/SubTitle";
import BoxTree from "../Commons/BoxTree/BoxTree";

function OurServices() {
  return (
    <section id="servicios">
      <SubTitle
        title="Nuestros Servicios"
        src="/SVG/servicios.svg"
        alt="servicios"
        size={"30px"}
      />
      <BoxTree />
    </section>
  );
}

export default OurServices;
