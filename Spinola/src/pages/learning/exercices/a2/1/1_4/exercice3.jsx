import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice3() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="42.85%"
        prevProgressExercice="35%"
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/14fbd594-3f22-4d12-9f32-b3c4c99793fe.jpg@jpg"
        }
        audio={
          "https://cdn.busuu.com/media-resources/audio/59f3d2dc-03f8-4b23-b411-91beba5e4416.mp3"
        }
      />

      <VideoInputExercices
        sentenceText1="Vous  "
        sentenceText2=" "
        sentenceText3=" quoi hier ?"
        answer_1="fais"
        answer_2="fait"
        answer_3="avez"
        answer_4="avé"
        correctAnswer="avez"
        correctAnswer2="fait"
        nextExercise={"/learning/exercices/a2/1/1_4/exercice4"}
      />
    </div>
  );
}
