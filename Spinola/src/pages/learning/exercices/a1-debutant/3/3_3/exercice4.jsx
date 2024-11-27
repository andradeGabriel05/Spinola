import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../language";

export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="57.14%"
        prevProgressExercice={"42.85%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices
        miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/69691edf-c56e-48b9-821e-4eb7b470e373.jpg@jpg"}
        audio={
          "https://cdn.busuu.com/media/resized/audio/a1l9ac51662474177_1662474177.mp3"
        }
      />

      <ExerciceWrite
        sentenceText1="Chris est "
        sentenceText2=". "
        correctAnswer="anglais"
        nextExercise="/learning/exercices/first-lessons/3/3_3/exercice5"
      />
    </div>
  );
}
