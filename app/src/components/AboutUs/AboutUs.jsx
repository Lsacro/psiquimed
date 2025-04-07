import "./aboutUs.css";
import SubTitle from "../Commons/SubTitle/SubTitle";

const AboutUs = () => {
  return (
    <>
      <section id="nosotros">
        <div className="container-us">
          <SubTitle
            title="Acerca de Nosotros"
            src={"/SVG/nosotros.svg"}
            alt={"nosotros"}
            size={"30px"}
          />

          <div className="us">
            <h2>Especialistas en psiquiatría y salud mental</h2>
            <div>
              <img className="img" src="/SVG/video.svg" alt="img video" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
