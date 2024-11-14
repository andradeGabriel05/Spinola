import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import audio from "Spinola/public/recordsExercices/paulAmerican.mp3";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";

export default function Exercice2() {
  return (
    <div className="container_execice bigger_page">
      <HeaderExercices
        progressExercice="28.57%"
        prevProgressExercice={"14.28%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Have you noticed? 🔍</p>
      </div>

      <ExplainWordWithAudio
        text={`In French, adjectives for nationalities, like "français" or "mexicain", are spelled in lowercase.`}
        textAudio1="Paul est américain. (Paul is American.)"
        audioSrc1={audio}
      />

      <FooterExercices
        nextExercise="/learning/exercices/first-lessons/4/4_3/exercice3"
      />
    </div>
  );
}
