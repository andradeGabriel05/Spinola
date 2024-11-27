import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";
export default function Exercice9() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="100%" prevProgressExercice="88.88%" />

      <div className="exercice_title page_exercice_text">
        <p> {LanguageFile.exerciseTitles[language].trueOrFalse}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/2b1dbefc-1b50-428c-a699-d26cae7061f3_small.mp4" />

      <VideoBoolExercices
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        title="Pardon!"
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        question={LanguageFile.exercise1_2[language].e9.text}
        nextExercise={"/premiere-lecon"}
        last={true}
        chapter={1}
        exercise={2}
      />
    </div>
  );
}
