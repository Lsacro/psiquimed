import "./aboutUs.css";
import SubTitle from "../Commons/SubTitle/SubTitle";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container-us">
          <SubTitle
            title="Acerca de Nosotros"
            src={"/SVG/nosotros.svg"}
            alt={"nosotros"}
            size={"30px"}
          />

          <div className="us">
            <h2>Especialistas en psiquiatría y salud mental</h2>
            <p>
              Nuestro equipo de profesionales capacitados está comprometido a
              brindar atención personalizada y compasiva
            </p>
          </div>
          <div className="items">
            <div className="item-us">
              <img src="/SVG/cruz.svg" alt="cruz" />
              <div className="item-solo">
                <h3 className="sub-titulo text-start">
                  Atención Personalizada y Empática
                </h3>
                <p className="text-start">
                  Sabemos que cada individuo es único, por lo que en Psiquimed
                  ofrecemos un enfoque de atención completamente personalizado.
                </p>
              </div>
            </div>
            <div className="item-us">
              <img src="/SVG/corazon.svg" alt="corazon" />
              <div className="item-solo">
                <h3 className="sub-titulo text-start">
                  Calidad en Cada Paso del Camino
                </h3>
                <p className="text-start">
                  Nuestra prioridad es ofrecer servicios de la más alta calidad,
                  combinando profesionalismo con calidez humana.
                </p>
              </div>
            </div>
            <div className="item-us">
              <img src="/SVG/cruz-escudo.svg" alt="cruz-escudo" />
              <div className="item-solo">
                <h3 className="sub-titulo text-start">
                  Compromiso con la Salud Mental
                </h3>
                <p className="text-start">
                  En Psiquimed, estamos convencidos de que cada persona merece
                  recibir atención en salud mental de manera oportuna y sin
                  barreras.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="about-us"
            src="/img/about-us.jpg"
            alt="paciente con dos doctoras"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
