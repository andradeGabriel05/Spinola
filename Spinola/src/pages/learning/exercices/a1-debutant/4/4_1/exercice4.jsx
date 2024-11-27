import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import "../exercice.scss";

import LanguageFile from "../../../../../../Language";

export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="36.36%"
        prevProgressExercice={"27.27%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].trueOrFalse}</p>
      </div>

      <VideoExercices
        miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/96e45005-2bdf-4290-9cf5-78122d689086.jpg@jpg"
        audio="https://cdn.busuu.com/media/resized/audio/a1l1021662480100_1662480100.mp3"
      />

      <VideoBoolExercices
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        title="Vous êtes américains ?"
        correctAnswer={LanguageFile.trueOrFalse[language].false}
        question={LanguageFile.exercise4_1[language].e4.text}
        nextExercise="/learning/exercices/first-lessons/4/4_1/exercice5"
        last=""
      />
    </div>
  );
}
