import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";

export default function Exercice3() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="42.85%" />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/315443ef-5776-43de-a0f3-673d7e3fd4c6.jpg@jpg"
          audio="https://cdn.busuu.com/media/resized/audio/a1l3cavabienmercitf1661336705_1661336706.mp3"
        />

        <div className="exercice_text page_exercice_text">
          <p>Ça va ? - Bien merci.</p>
        </div>
      </div>

      
      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        correctAnswer="True"
        question={`"Bien, merci" means "Fine, thanks."`}
        nextExercise={"/learning/exercices/premiere-lessons/1/1_3/exercice4"}
      />
    </div>
  );
}