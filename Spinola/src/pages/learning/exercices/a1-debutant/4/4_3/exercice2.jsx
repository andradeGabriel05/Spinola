import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import audio from "Spinola/public/recordsExercices/paulAmerican.mp3";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";

export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="28.57%"
        prevProgressExercice={"14.28%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise4_3[language].e2.title}</p>
      </div>

      <ExplainWordWithAudio
        text={LanguageFile.exercise4_3[language].e2.text1}
        textAudio1={LanguageFile.exercise4_3[language].e2.text2}
        audioSrc1={audio}
      />

      <FooterExercices
        nextExercise="/learning/exercices/first-lessons/4/4_3/exercice3"
      />
    </div>
  );
}
