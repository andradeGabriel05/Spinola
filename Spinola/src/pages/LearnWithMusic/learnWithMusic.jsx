import { useEffect, useState } from "react";
import "./learnWithMusic.scss";
import { test } from "./test";

export default function LearnWithMusic(video) {
  useEffect(() => {
    test();
  });
  const [buttonState, setButtonState] = useState("pause");
  const [paused, setPaused] = useState(false);

  function handlePauseResume() {
    if (buttonState == "pause") {
      setButtonState("play");
      setPaused(true);
    } else {
      setButtonState("pause");
      setPaused(false);
      test(paused);
    }
  }
  return (
    <div className="container_music_video">
      <div className="wrapper_video_choice">
        <video controls autoPlay={true} >
          <source
            src="/Françoise Hardy’s Message Personnel (1973).mp4"
            type="video/mp4"
          />
        </video>

        <div className="wrapper_btns_choice">
          <button onClick={test}>Choice1</button>
          <button>Choice2</button>
          <button>Choice3</button>
          <button>Choice4</button>
          <button onClick={handlePauseResume}>{buttonState}</button>
        </div>
      </div>
      <div className="lyrics" id="lyricsPageId"></div>
    </div>
  );
}

{
  /* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */
}
