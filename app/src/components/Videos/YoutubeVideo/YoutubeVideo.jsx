import { useState } from "react";
import styles from "./youtubeVideo.module.css";

function YoutubeVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={styles.wrapper}>
      {!showVideo ? (
        <div className={styles.placeholder} onClick={() => setShowVideo(true)}>
          <div
            className={styles.previewContainer}
            onClick={() => setShowVideo(true)}
          >
            <img
              src="/videos/preview.jpg"
              alt="Video Preview"
              className={styles.previewImage}
            />
            <div className={styles.playIcon}>▶</div>
          </div>
        </div>
      ) : (
        <video
          className={styles.video}
          src="/videos/Psiquimed1.mp4"
          controls
          autoPlay
        >
          Tu navegador no soporta video HTML5.
        </video>
      )}
    </div>
  );
}

export default YoutubeVideo;
