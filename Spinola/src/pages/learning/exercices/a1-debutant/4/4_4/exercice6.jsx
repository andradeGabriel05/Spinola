import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

export default function Exercice6() {
  return (
    <div className="container_execice">
      <HeaderExercices
        progressExercice="66.66%"
        prevProgressExercice={"55.55%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>What is he saying?</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_m/plain/s3://busuu-logos-service-media-production/media-resources/image/2c4299ed-ad0c-42a8-9276-f0d316968221.jpg@jpg"}
          audio="https://cdn.busuu.com/media/resized/audio/a1l1181662477433_1662477433.mp3"
        />
      </div>

      <VideoInputExercices
        answer_1="êtes"
        answer_2="est"
        sentenceText1="Vous "
        sentenceText2="toujours contents !"
        correctAnswer="êtes"
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice7"}
      />
    </div>
  );
}
