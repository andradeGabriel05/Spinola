import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

export default function Exercice5() {
  return (
    <div className="container_execice bigger_page">
      <HeaderExercices
        progressExercice="71.42%"
        prevProgressExercice={"57.14%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices
        miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/6d01edbc-5cc1-4ddc-a2f6-af4057faf1d7.jpg@jpg"}
        audio={
          "https://cdn.busuu.com/media/resized/audio/a1l9ac61662474207_1662474207.mp3"
        }
      />

      <ExerciceWrite
        sentenceText1="Tu es "
        sentenceText2="? "
        correctAnswer="mexicaine"
        nextExercise="/learning/exercices/first-lessons/3/3_3/exercice6"
      />
    </div>
  );
}
