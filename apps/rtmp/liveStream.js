import { useEffect } from "react";
import Hls from "hls.js";

export default function LiveStream() {
  useEffect(() => {
    const video = document.getElementById("video");
    const videoSrc = "/hls/test.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
    }
  }, []);

  return (
    <div>
      <video id="video" controls></video>
    </div>
  );
}
