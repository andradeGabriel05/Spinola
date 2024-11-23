import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice8() {
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="88.88%"
        prevProgressExercice={"77.77%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices
        miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/3b56b728-6ca7-4f6d-854d-069754803002.jpg@jpg"}
        audio="https://cdn.busuu.com/media/resized/audio/a1l10101662480207_1662480207.mp3"
      />

      <VideoBoolExercices
        title={"Christoph et Daniel ? Ils sont allemands !"}
        question="Ella says that Christoph and Daniel are English. "
        answer_1="True"
        answer_2="False"
        correctAnswer="False"
        nextExercise="/learning/exercices/first-lessons/4/4_1/exercice9"
      />
    </div>
  );
}
