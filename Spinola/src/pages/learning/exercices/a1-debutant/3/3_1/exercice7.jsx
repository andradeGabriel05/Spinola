import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";

export default function Exercice7() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="77.77%" prevProgressExercice={"66.66%"}/>

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/7aca3a8c-c0b7-4674-aa53-b755f54d26e2.jpg@jpg" audio={"https://cdn.busuu.com/media/resized/audio/a1l8jesuiscontentauj1662462242_1662462242.mp3"}/>

      <ExerciceWrite
        sentenceText1="Je suis "
        sentenceText2="aujourd'hui !"
        correctAnswer="content"
        nextExercise={"/learning/exercices/first-lessons/3/3_1/exercice8"}
      />
    </div>
  );
}
