import "./aboutUs.css";
import SubTitle from "../Commons/SubTitle/SubTitle";
import YoutubeVideo from "../Videos/YoutubeVideo/YoutubeVideo";
import BookinButton from "../Commons/BookinButton/BookinButton";

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
            <div className="us-video">
              <YoutubeVideo
                video="/videos/Psiquimed2.mp4"
                img="/videos/preview2.jpg"
              />
              <BookinButton name="Más información" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
