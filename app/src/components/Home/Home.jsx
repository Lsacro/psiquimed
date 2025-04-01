import BookinButton from "../Commons/BookinButton/BookinButton";
import Ratin from "../Commons/Rating/Ratin";
import SubTitle from "../Commons/SubTitle/SubTitle";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="title-img">
          <div className="tittle">
            <div className="tittle1">
              <SubTitle
                title="Tu Salud Nuestra Prioridad"
                src={"/SVG/health.svg"}
                alt={"cerebro"}
                size={"30px"}
              />
            </div>
            <h1>Especialistas en Psiquiatría y Salud Mental</h1>
            <p className="texto">
              Disfrute de una atención médica en la que puede confiar. Nuestro
              equipo dedicado brinda atención compasiva y de alta calidad
            </p>

            <BookinButton name="Agendar Una Cita" />
            <Ratin />
          </div>
          <div>
            <img
              className="img"
              src="https://demo.awaikenthemes.com/dispnsary/wp-content/uploads/2025/01/hero-img.png"
              alt="doctora de psiquiatria"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
