import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice5() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="71.42%" />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/1e9ecef2-438d-43de-82a3-fc91a338a184.jpg@jpg" audio="https://cdn.busuu.com/media/resized/audio/a1l331660926772_1660926772.mp3" />

        <ExerciceWrite 
        sentenceText1="Bien "
        sentenceText2=", et vous ?"
        correctAnswer="merci"
        nextExercise={"/learning/exercices/first-lessons/1/1_4/exercice6"}
        />
      </div>
    </div>
  );
}
