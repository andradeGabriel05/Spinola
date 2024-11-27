import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import "../exercice.scss";

import LanguageFile from "../../../../../../language";

export default function Exercice7() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="77.77%" prevProgressExercice="66.66%"/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].listenAndChoose}</p>
      </div>

      <VideoExercices videoSrc="https://static.memrise.com/uploads/things/video/medium/1000091193_161125_1359_29.mp4#t=0.1" />

      <VideoBoolExercices
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        title="Très bien"
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        question={LanguageFile.exercise2_2[language].e6.text}
        nextExercise={"/learning/exercices/first-lessons/2/2_2/exercice8"}
      />
    </div>
  );
}
