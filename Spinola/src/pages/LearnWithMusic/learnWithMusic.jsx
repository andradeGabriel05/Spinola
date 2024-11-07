import { useEffect, useRef, useState } from "react";
import "./learnWithMusic.scss";
import { test } from "./test";

export default function LearnWithMusic(video) {
  const [buttonState, setButtonState] = useState("playing");
  const [passedOnce, setPassedOnce] = useState(false);
  const videoRef = useRef(null);
  function handlePauseResume() {
    if (videoRef.current.paused) {
    console.log(test(buttonState, passedOnce));
      videoRef.current.play();
      setButtonState("playing");

      var tempoPreciso = test(buttonState, passedOnce) 
      console.log(tempoPreciso / 1000)
      videoRef.current.currentTime = tempoPreciso / 1000;
    } else {
      videoRef.current.pause();
      setButtonState("pause");
      setPassedOnce(true);

    }
  }

  // Atualize o estado do vídeo e passe para o test
  useEffect(() => {
    test(buttonState, passedOnce);
    if (buttonState === "playing") {
      // setPassedOnce(true);
    }
  }, [buttonState, passedOnce]);

  return (
    <div className="container_music_video">
      <div className="wrapper_video_choice">
        <video ref={videoRef} autoPlay={true}>
          <source
            src="/Françoise Hardy’s Message Personnel (1973).mp4"
            type="video/mp4"
          />
        </video>

        <div className="wrapper_btns_choice">
          <button
            onClick={() => {
              handlePauseResume();
            }}
          >
            {buttonState}
          </button>
        </div>
      </div>
      <div className="lyrics" id="lyricsPageId"></div>
    </div>
  );
}

{
  /* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */
}

// } else if (videoState == "" && passedOnce == true) {
//   lyricsData.lyricsTimeVerse.forEach((lista) => {
//     console.log(Object.keys(lista)[0])
//     const intervalId = setTimeout(() => {
//       console.log(timeoutIds)
//       console.log(timeoutIds[intervalId])
//       time = Object.keys(lista)[0]
//       console.log(time)
//       lyricsPageId.innerHTML = "";
//       const words = lista[Object.keys(lista)[0]].split(" ");
//       words.forEach((word) => {
//         const span = document.createElement("span");
//         span.textContent = word;
//         lyricsPageId.appendChild(span);
//         console.log(timeoutIds)
//       });
//     }, Object.keys(lista)[0]);
//     timeoutIds.push(intervalId);
//   });
// } else {
//   timeoutIds.forEach((id) => clearTimeout(id));
//   return passedOnce = true
// }
