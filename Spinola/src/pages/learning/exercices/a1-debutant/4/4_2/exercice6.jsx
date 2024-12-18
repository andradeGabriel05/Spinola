import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

import LanguageFile from "../../../../../../language";
export default function Exercice6() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="84%" prevProgressExercice={"70%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_m/plain/s3://busuu-logos-service-media-production/media-resources/image/19ae1e53-9d6f-43e5-b142-b2f10706d063.jpg@jpg"
        }
      />

      <VideoInputExercices
        answer_1="impatient"
        answer_2="content"
        answer_3="fatigués"
        answer_4="contente"
        sentenceText1="Lison est toujours "
        sentenceText2="et Tina et Oskar sont souvent "
        sentenceText3="."
        correctAnswer="contente"
        correctAnswer2="fatigués"
        nextExercise="/learning/exercices/first-lessons/4/4_2/exercice7"
      />
    </div>
  );
}
