import { useEffect, useRef, useState } from "react";
import "./learnWithMusic.scss";
import { test } from "./test";

export default function LearnWithMusic() {
  const [buttonState, setButtonState] = useState("playing");
  const [passedOnce, setPassedOnce] = useState(false);
  const [tempoPreciso, setTempoPreciso] = useState(0); // Estado para observar o valor de `time`
  const videoRef = useRef(null);

  function handlePauseResume() {
    if (videoRef.current.paused) {
      const tempo = test(buttonState, passedOnce);
      console.log(tempo);
      videoRef.current.play();
      setButtonState("playing");

      setTempoPreciso(tempo); // Define o valor de tempo
      videoRef.current.currentTime = tempo / 1000;
    } else {
      videoRef.current.pause();
      setButtonState("pause");
      setPassedOnce(true);
    }
  }

  useEffect(() => {
    // Chama `test` e define o valor retornado em `tempoPreciso`
    const tempo = test(buttonState, passedOnce);
    setTempoPreciso(tempo);

    // Verifica se `tempoPreciso` é suficiente para pausar o vídeo
    if (
      videoRef.current &&
      videoRef.current.currentTime > tempoPreciso / 1000
    ) {
      videoRef.current.pause();
      setButtonState("pause");
      setPassedOnce(true);
      console.log("Vídeo pausado no tempo especificado.");
    }
  }, [buttonState, passedOnce, tempoPreciso]);

  return (
    <div className="container_music_video">
      <div className="wrapper_video_choice">
        <video id="videoMusic" ref={videoRef} autoPlay={true}>
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
