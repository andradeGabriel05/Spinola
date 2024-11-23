import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";


export default function Exercice7() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="100%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete a Community exercise.</p>
      </div>

      <VideoExercices miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_m/plain/s3://busuu-logos-service-media-production/media-resources/image/fc58da6f-e085-4edc-85ab-ded3670323c5.jpg@jpg" audio="" />
      <div className="exercice_text page_exercice_text">
        <p>What can you reply if someone says: "Bonjour ! Ça va ?"</p>
      </div>
      <ExerciceWrite 
      
      />
    </div>
  );
}
