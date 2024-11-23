import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

export default function Exercice11() {
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="66.66%"
        prevProgressExercice={"55.55%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Select the sentence that means: "We are French!"</p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/bd973974-80da-4bd2-96b4-02912fbca88a.jpg@jpg"
        }
      />

      <ExerciceWithoutVideo
        answer_1="Vous êtes françaises !"
        answer_2="Nous sommes françaises !"
        answer_3="Elles sont françaises !"
        correctAnswer="Nous sommes françaises !"
        nextExercise="/premiere-lecon"
      />
    </div>
  );
}
