import { useEffect, useRef, useState } from "react";
import "./messagePersonnel.scss";
import axios from "axios";
import { getClickedWord, getValorKey, test } from "./test";

export default function messagePersonnel() {
  // const [buttonState, setButtonState] = useState("playing");
  // const [passedOnce, setPassedOnce] = useState(false);
  // const [tempoPreciso, setTempoPreciso] = useState(0);
  const videoRef = useRef(null);

  // // Atualize o estado do vídeo e passe para o test

  // const [valorDeRetorno, setValorDeRetorno] = useState(getValor);
  // const [isPaused, setIsPaused] = useState(getIsPaused);

  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //     const novoValor = getValor();
  //     if (novoValor !== valorDeRetorno && novoValor !== 0) {
  //       setValorDeRetorno(novoValor);
  //     }

  //     const currentTime = videoRef.current.currentTime;

  //     if (
  //       isPaused &&
  //       currentTime > valorDeRetorno / 1000 &&
  //       valorDeRetorno !== 0
  //     ) {
  //       videoRef.current.pause();
  //       console.log("Vídeo pausado no tempo especificado.");
  //       videoRef.current.currentTime = valorDeRetorno / 1000
  //     } else if (!isPaused) {
  //       videoRef.current.play();
  //       setButtonState("play");
  //     }
  //   }, 300); // Intervalo de 300ms, ajuste conforme necessário

  //   console.log(isPaused);

  //   return () => clearInterval(intervalo);
  // }, [isPaused, valorDeRetorno]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsPaused(getIsPaused());
  //   }, 300); // Verifica alterações na variável global a cada 100ms

  //   return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  // }, []);

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en"); // Idioma de destino
  const [clickedWordState, setClickedWordState] = useState(getClickedWord);
  const [time, setTime] = useState(getValorKey);

  useEffect(() => {
    // Atualiza o estado sempre que clickedWord muda
    const interval = setInterval(() => {
      const newClickedWord = getClickedWord();
      if (newClickedWord != clickedWordState) {
        setClickedWordState(newClickedWord);
        console.log(newClickedWord); // Mostra o valor atualizado
      }
      if (videoRef.current.currentTime > 213.034) {
        window.location.href = "/music-finish"
        localStorage.setItem("typeOfMedia", 2) // music
        localStorage.setItem("timeSpent", 213034)
        return

      }
    }, 100); // Verifica a cada 100ms

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [clickedWordState]);

  useEffect(() => {
    if (clickedWordState != "" && clickedWordState !== "'") {
      console.log("clickedWordState mudou para:", clickedWordState);
      videoRef.current.pause();
      handleTranslate()
    } else {
      videoRef.current.currentTime = getValorKey() / 1000;
      console.log(videoRef.current.currentTime);
      videoRef.current.play();
    }
  }, [clickedWordState]);

  useEffect(() => {
    test();
  }, []);
  const language = localStorage.getItem("language");

  async function handleTranslate() {
    const apiKey = "af587c51-ce3e-4b79-a195-c4367b10e29c:fx";

    try {
      const response = await axios.post(
        "https://api-free.deepl.com/v2/translate",
        new URLSearchParams({
          auth_key: apiKey,
          text: clickedWordState,
          target_lang: language,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // Atualiza o estado com o texto traduzido
      setTranslatedText(response.data.translations[0].text);
      console.log(translatedText)
      console.log(response)

      const divForTextTranslated = document.createElement("div");
      divForTextTranslated.innerHTML = `
        <span id='textForTranslatedWord'>Tradução:</span>
        <span id='translatedWordId'>${response.data.translations[0].text}</span>
      `;

      wordTranslateBox.appendChild(divForTextTranslated);

    } catch (error) {
      console.error("Erro ao traduzir:", error);
      setTranslatedText("Erro");
    }
  }

  return (
    <div className="container_music_video">
      <div className="wrapper_video_choice">
        <video id="videoMusic" autoPlay={true} ref={videoRef}>
          <source
            src="/Françoise Hardy’s Message Personnel (1973).mp4"
            type="video/mp4"
          />
        </video>

        <div className="wrapper_btns_choice">
          {/* <button
            onClick={() => {
              handleTranslate();
            }}
          >
            {translatedText}
          </button> */}
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
