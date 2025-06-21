import YoutubeVideo from "../../Videos/YoutubeVideo/YoutubeVideo";
import ServiceBtn from "../ServiceBtn/ServiceBtn";
import styles from "./ourServicesBtn.module.css";
import { useState } from "react";

function OurServicesBtn({ name, individual, group, video }) {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button1}>
        {name}
      </button>
      {hidden && (
        <div className={styles.hidden}>
          <div>
            <ServiceBtn
              terapia={individual ? "Terapia Individual" : ""}
              servicios={individual || null}
            />
            <ServiceBtn terapia="Terapia Grupal" servicios={group} />
          </div>

          <div className={styles.carrousel}>
            {video &&
              video.map((item, index) => (
                <YoutubeVideo
                  key={index}
                  video={item.videos[0]}
                  img={item.imgs[0]}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OurServicesBtn;
