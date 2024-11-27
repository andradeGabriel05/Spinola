import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";
export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="22.22%" prevProgressExercice="11.11%"/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].TrueOrFalse}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/186db240-bcb6-49ff-9aa6-0d1bb1a88e4e_small.mp4" />

      <VideoBoolExercices
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        title="S'il vous plaît"
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        question={LanguageFile.exercise1_2[language].e2.text}
        nextExercise={"/learning/exercices/first-lessons/1/1_2/exercice3"}
      />
    </div>
  );
}
