import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import audio from "Spinola/public/recordsExercices/marieEtSophieFr.mp3";
import audio2 from "Spinola/public/recordsExercices/pierreEtThomasFr.mp3";
import audio3 from "Spinola/public/recordsExercices/mariePierreSophieThomasFr.mp3";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";

import LanguageFile from "../../../../../../Language";

export default function Exercice8() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="88.88%"
        prevProgressExercice={"77.77%"}
      />

      <div className="exercice_title page_exercice_text">
        <p> {LanguageFile.exercise3_4[language].e8.title}</p>
      </div>

      <ExplainWordWithAudio
        text={LanguageFile.exercise3_4[language].e8.text1}
        textAudio1={LanguageFile.exercise3_4[language].e8.text2}
        audioSrc1={audio}
        textAudio2={LanguageFile.exercise3_4[language].e8.text3}
        audioSrc2={audio2}
        textAudio3={LanguageFile.exercise3_4[language].e8.text4}
        audioSrc3={audio3}
      />

      {/* https://cdn.busuu.com/media/resized/audio/a1l681661427808_1661427808.mp3 */}

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice9"}
      />
    </div>
  );
}
