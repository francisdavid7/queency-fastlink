import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoJS = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div className="fixed flex items-center justify-center w-full h-full bg-black/50 top-0 left-0 z-999">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-red-500 w-[50%] overflow-hidden rounded-[30px] border-blue-400 border-2"
      >
        <div data-vjs-player>
          <div ref={videoRef} className="w-[100%]" />
        </div>
      </motion.div>
    </div>
  );
};

export default VideoJS;
