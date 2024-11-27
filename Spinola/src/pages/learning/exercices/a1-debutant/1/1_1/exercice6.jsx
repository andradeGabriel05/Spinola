import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import LanguageFile from "../../../../../../language.json";
import "../exercice.scss";

export default function Exercice6() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="75%" prevProgressExercice="62.5%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/0c6fd924-d1fc-4b3c-b44d-cca95c2217d6_small.mp4" />

      <VideoBoolExercices
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        title="Au revoir!"
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        question={LanguageFile.exercise1_1[language].e6.text}
        nextExercise={"/learning/exercices/first-lessons/1/1_1/exercice7"}
      />
    </div>
  );
}
