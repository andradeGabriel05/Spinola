import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice3() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="42.85%" />

      <div className="exercice_title page_exercice_text">
        <p>What does Seb ask Élise?</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/608f2f54-b28a-4b93-bba5-8ba5970752ac.jpg@jpg"
          audio="https://cdn.busuu.com/media-resources/audio/605cffb3-c6c4-4341-a1d0-36b4f3b4c0aa.mp3"
        />
      </div>

      
      <ExerciceWithoutVideo
        answer_1="How she is doing"
        answer_2="Nothing"
        answer_3="Saying goodbye"
        answer_4="Asking her name"
        correctAnswer="How she is doing"
        nextExercise={"/learning/exercices/premiere-lessons/1/1_4/exercice4"}
      />
    </div>
  );
}
