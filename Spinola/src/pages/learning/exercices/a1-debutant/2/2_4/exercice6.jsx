import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";

export default function Exercice6() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="85.71%" />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices
        miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/315443ef-5776-43de-a0f3-673d7e3fd4c6.jpg@jpg"
        audio="https://cdn.busuu.com/media/resized/audio/b30l3t_faudioonlineaudioconvertercom1660925565_1660925565.mp3"
      />

      <div className="exercice_text page_exercice_text">
        <p>Bonjour, ça va ? - Bien merci, et vous ?</p>
      </div>

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        correctAnswer="True"
        question={`"Et vous ?" means "And you? (singular formal)".`}
        nextExercise={"/learning/exercices/first-lessons/1/1_3/exercice7"}
      />
    </div>
  );
}
