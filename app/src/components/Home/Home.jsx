import BookinButton from "../Commons/BookinButton/BookinButton";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="title-img">
          <div className="tittle">
            <h1>Especialistas en Psiquiatría y Salud Mental</h1>
            <div className="img-container">
              <img className="img" src="/SVG/video.svg" alt="img video" />
            </div>
            <p className="texto">
              Disfrute de una atención médica en la que puede confiar. Nuestro
              equipo dedicado brinda atención compasiva y de alta calidad
            </p>
            <div className="button-container">
              <BookinButton name="Agendar Una Cita" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
