import "./explainWordWithAudio.scss";
import { FaVolumeUp } from "react-icons/fa";


export default function ExplainWordWithAudio({
  text,
  textAudio1,
  audioSrc1,
  textAudio2,
  audioSrc2,
  textAudio3,
  audioSrc3,
}) {
  function handlePlayAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
  }
  return (
    <div className="exercice_title page_exercice_text exercice_explain exercice_explain_wth_audio">
      <div className="text_explain">
        <p>{text}</p>

        <div className="audio_explain">
          <p>{textAudio1}</p>
          <FaVolumeUp
            className="reactIcon play_audio_icon"
            onClick={() => handlePlayAudio("audio1")}
          />
          <audio id="audio1" src={audioSrc1}></audio>
        </div>
        <div className="audio_explain">
          <p>{textAudio2}</p>
          <FaVolumeUp
            className="reactIcon play_audio_icon"
            onClick={() => handlePlayAudio("audio2")}
          />
          <audio id="audio2" src={audioSrc2}></audio>
        </div>

      {textAudio3 && textAudio3 !== "" && (

        <div className="audio_explain">
          <p>{textAudio3}</p>
          <FaVolumeUp
            className="reactIcon play_audio_icon"
            onClick={() => handlePlayAudio("audio3")}
          />
          <audio id="audio3" src={audioSrc3}></audio>
        </div>
      )}

      </div>
    </div>
  );
}
