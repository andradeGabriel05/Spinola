import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice3() {
  return (
    <div className="container_execice bigger_page">
      <HeaderExercices progressExercice="27.27%" prevProgressExercice={"18.18%"} />

      <div className="exercice_title page_exercice_text">
        <p>What are the nationalities mentioned in Lison's blog post?</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/ea7b1091-f7e0-4ff6-aa99-075b5cc3f478.jpg@jpg" />

      </div>
      <ExerciceWithoutVideo
        answer_1="anglaise/ américain/ allemands"
        answer_2="anglaise/ français/ allemands"
        answer_3="anglaise/ mexicain/ allemands"
        correctAnswer="anglaise/ américain/ allemands"
        nextExercise="/learning/exercices/first-lessons/4/4_2/exercice4"
      />
    </div>
  );
}
