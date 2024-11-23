import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";

export default function Exercice7() {
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="77.77%"
        prevProgressExercice={"66.66%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>What is he saying?</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={
            "https://cdn.busuu.com/media/resized/entity/1440/shutterstock_7898722571662134773_1662134773_1440.jpg"
          }
          audio="https://cdn.busuu.com/media-resources/audio/119bd315-3535-4072-bf83-1285acd0e948.mp3"
        />
      </div>

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        title="Tom est souvent impatient et moi je suis toujours contente !"
        correctAnswer="False"
        question="Tom is always happy."
        nextExercise="/learning/exercices/first-lessons/4/4_4/exercice8"
      />
    </div>
  );
}
