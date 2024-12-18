import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";


import LanguageFile from "../../../../../../language.json";
export default function Exercice8() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="72.72%"
        prevProgressExercice={"63.63%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].trueOrFalse}</p>
      </div>

      <VideoExercices
        miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/3b56b728-6ca7-4f6d-854d-069754803002.jpg@jpg"}
        audio="https://cdn.busuu.com/media/resized/audio/a1l10101662480207_1662480207.mp3"
      />

      <VideoBoolExercices
        title={"Christoph et Daniel ? Ils sont allemands !"}
        question={LanguageFile.exercise4_1[language].e8.text}
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        correctAnswer={LanguageFile.trueOrFalse[language].false}
        nextExercise="/learning/exercices/first-lessons/4/4_1/exercice9"
      />
    </div>
  );
}
