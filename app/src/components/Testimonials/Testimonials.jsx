import styles from "./testimonials.module.css";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Alejandro Paredes",
      calificacion: "5",
      resena: "Excelente servicio y los mejores profesionales. Muy recomendado",
    },
    {
      id: 2,
      name: "Jorge Tandazo",
      calificacion: "5",
      resena:
        "Excelente atención, personal capacitado. Muy amables. Lugar muy cálido. Te ayudan tomando en cuenta cada aspecto de tu ser. 100% recomendable",
    },
    {
      id: 3,
      name: "Paolo Mediavilla",
      calificacion: "5",
      resena:
        "Una atención de excelencia, profesionales de muy alto nivel. Recomendado al 100% el servicio",
    },
    {
      id: 4,
      name: "Mauricio Zurita",
      calificacion: "5",
      resena:
        "Excelente y profesional servicio. Recomiendo los servicios 100%!",
    },
    {
      id: 5,
      name: "Angelica Wong",
      calificacion: "5",
      resena:
        "He tenido una maravillosa experiencia con el Dr. Sebastian Vizcaino. Tiene un espacio muy confortable. Sus conocimientos me han ayudado muchísimo a pasar por mis procesos de la manera más adecuada",
    },
    {
      id: 6,
      name: "Yassel Romero",
      calificacion: "5",
      resena:
        "El lugar es muy cómodo y transmite tranquilidad lo cual te permite poder conectar con tu psiquiatra, en mi caso la Dra. me ha ayudado a tener las herramientas necesarias para poder enfrentar cualquier tipo de situación, hablar con ella me ha permitido entender muchas cosas de las cuales antes no sabía manejar, pero con su ayuda he podido ir progresando",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.content}>
              <h5>{item.name}</h5>
              <p>{item.resena}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
