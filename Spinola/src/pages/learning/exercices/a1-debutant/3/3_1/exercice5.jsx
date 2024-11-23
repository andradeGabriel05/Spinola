import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite"
import "../exercice.scss";

export default function Exercice5() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="55.55%" prevProgressExercice={"44.44%"}/>

      <div className="exercice_title page_exercice_text">
        <p>What is he saying?</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/3e48d1e8-7bef-4db6-ba85-e3826608e27b.jpg@jpg"} audio="https://cdn.busuu.com/media/resized/audio/a1l861662460575_1662460575.mp3" />
      </div>

      <ExerciceWrite 
      correctAnswer="fatiguée"
      sentenceText1="Oui, je suis ."
      sentenceText2="."
      nextExercise={"/learning/exercices/first-lessons/3/3_1/exercice6"}
      />


    </div>
  );
}
