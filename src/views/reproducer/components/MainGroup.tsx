import { useEffect, useRef } from "react";
import Comment from "./Comment";
import ListComment from "./ListComment";
import { observer } from "mobx-react";
import { MidiaView } from "^/lib/core/viewModels/MidiaViewModel";
import { IP } from "^/lib/core/api/ApiBase";

const MainGroup = observer(({ midiaView }: MidiaView) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      const sourceElement = videoElement.querySelector("source");

      if (sourceElement) {
        sourceElement.src = `http://192.168.18.7:3333/midia/video/${midiaView.reprocudeNow}`;
        console.log(
          `Loading video: http://192.168.18.7:3333/midia/video/${midiaView.reprocudeNow}`
        ); // Log for debugging
        videoElement.load(); // Load the new video URL
        videoElement.currentTime = 0; // Reset playback time to 0
      }
    }
  }, [midiaView.reprocudeNow]);

  return (
    <main className="flex flex-row w-[48.7rem] justify-between h-full">
      <div className="flex flex-col w-full h-full">
        <div className="w-[100%] border-2 overflow-hidden rounded-2xl h-[30.4rem]">
          <video
            controls
            className="w-[100%] h-[100%] rounded-lg"
            ref={videoRef}
          >
            <source
              src={`http://192.168.18.7:3333/midia/video/${midiaView.reprocudeNow}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <ListComment midiaView={midiaView} />
        <Comment midiaView={midiaView} />
      </div>
    </main>
  );
});

export default MainGroup;
