import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

import LanguageFile from "../../../../../../language";

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
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/576314c4-40ba-4c10-9806-459989ed36f7.jpg@jpg"
        }
        audio="https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3"
      />

      <div className="exercice_text page_exercice_text text_left">
        <p>Je suis anglaise.</p>
      </div>

      <VideoBoolExercices
        question={LanguageFile.exercise3_2[language].e8.text}
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        correctAnswer={LanguageFile.trueOrFalse[language].false}
        nextExercise="/learning/exercices/first-lessons/3/3_2/exercice9"
      />
    </div>
  );
}
