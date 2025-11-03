import { useRef } from "react";
import VideoJS from "./VideoJs";

const VideoPlayer = ({ src, className }) => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: src,
        type: "video/mp4"
      }
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <>
      <VideoJS
        options={videoJsOptions}
        onReady={handlePlayerReady}
        className={className}
      />
    </>
  );
};

export default VideoPlayer;
