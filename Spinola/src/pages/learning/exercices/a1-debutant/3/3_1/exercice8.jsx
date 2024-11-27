import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

import LanguageFile from "../../../../../../language";
export default function Exercice8() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="88.88%" prevProgressExercice={"77.77%"}/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].trueOrFalse}</p>
      </div>

      <VideoExercices miniature={" "} audio="https://cdn.busuu.com/media/resized/audio/a1l8tf21662462405_1662462405.mp3" />

      <VideoBoolExercices
        question={LanguageFile.exercise3_1[language].e8.text}
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        nextExercise="/learning/exercices/first-lessons/3/3_1/exercice9"
      />
    </div>
  );
}
