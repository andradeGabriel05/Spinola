import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice6() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="66.66%" prevProgressExercice={"55.55%"} />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/0bc06158-23ca-416e-86b0-9c930104b7ad.jpg@jpg"
        }
        audio="https://cdn.busuu.com/media-resources/audio/2ce88760-3a7c-417f-be36-3387b3a2c184.mp3"
      />

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        correctAnswer="False"
        question="Fed is tired today."
        nextExercise="/learning/exercices/first-lessons/3/3_1/exercice7"
      />
    </div>
  );
}
