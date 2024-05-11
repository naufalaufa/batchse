import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import HeheVideo from "../../public/IGDownloader.App_3281478362405073657.mp4";

const VideoJumbotron = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    gsap.timeline(video, {
      scrollTrigger: {
        trigger: video,
        start: "top start",
        end: "bottom+=200% bottom",
        scrub: true,
      },
    });
  });

  return (
    <div className="grid min-h-screen place-content-center">
      <div>
        <video
          ref={videoRef}
          id="video"
          src={HeheVideo}
          loop
          width="100%"
        ></video>
      </div>
    </div>
  );
};

export default VideoJumbotron;
