import BookinButton from "../Commons/BookinButton/BookinButton";
import YouTubeVideo from "../Videos/YoutubeVideo/YoutubeVideo";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="title-img">
          <div className="tittle">
            <h1>Especialistas en Psiquiatría y Salud Mental</h1>
            <div>
              <YouTubeVideo
                video="/videos/Psiquimed1.mp4"
                video2="/videos/Psiquimed1_Cuadrado.mp4"
                img="/videos/preview.jpg"
              />
            </div>

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
