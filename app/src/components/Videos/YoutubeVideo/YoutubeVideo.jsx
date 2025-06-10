import { useState } from "react";
import styles from "./youtubeVideo.module.css";

function YoutubeVideo({ video, img, video2 }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={styles.wrapper}>
      {!showVideo ? (
        <div className={styles.placeholder} onClick={() => setShowVideo(true)}>
          <div
            className={styles.previewContainer}
            onClick={() => setShowVideo(true)}
          >
            <div className={styles.preview}>
              <img
                src={img}
                alt="Video Preview"
                className={styles.previewImage}
              />
              <div className={styles.playIcon}>▶</div>
            </div>
          </div>
        </div>
      ) : (
        <video className={styles.video} src={video} controls autoPlay>
          Tu navegador no soporta video HTML5.
        </video>
      )}
    </div>
  );
}

export default YoutubeVideo;
