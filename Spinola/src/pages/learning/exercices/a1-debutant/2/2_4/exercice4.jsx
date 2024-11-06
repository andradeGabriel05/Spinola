import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";

export default function Exercice4() {
  return (
    <div className="container_execice">
    <div className="container_execice">
      <HeaderExercices progressExercice="80%" prevProgressExercice="60%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>


      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature=" "
          audio="https://cdn.busuu.com/media/resized/audio/a1l7_audio1_mcq1662459650_1662459650.mp3"
        />

      </div>

      <ExerciceWrite
        sentenceText2="content."
        correctAnswer="Tu es"
        nextExercise={"/learning/exercices/first-lessons/2/2_4/exercice5"}
      />
    </div>
    </div>
  );
}
