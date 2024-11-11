import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";

export default function Exercice2() {
  return (
    <div className="container_execice bigger_page">
      <HeaderExercices
        progressExercice="22.22%"
        prevProgressExercice={"11.11%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Tu es de quelle nationalité ? </p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_m/plain/s3://busuu-logos-service-media-production/media-resources/image/7baf2b0c-6ce5-4777-893d-669f68030384.jpg@jpg"
        }
        audio={
          "https://cdn.busuu.com/media/resized/audio/a1l1131662477290_1662477290.mp3"
        }
      />

      <VideoInputExercices
        answer_1="suis"
        answer_2="sais"
        answer_3="es"
        answer_4="est"
        sentenceText1="Elle"
        sentenceText2="américaine, mais je"
        sentenceText3="mexicain."
        correctAnswer="est"
        correctAnswer2="suis"
        nextExercise="/learning/exercices/first-lessons/3/3_4/exercice3"
      />
    </div>
  );
}
