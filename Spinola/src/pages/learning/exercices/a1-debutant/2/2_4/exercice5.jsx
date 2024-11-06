import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";

export default function Exercice5() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="100%" prevProgressExercice={"80%"}/>

      <div className="exercice_title page_exercice_text">
        <p>Select the sentence you hear. </p>
      </div>

      <VideoExercices
          miniature=" "
          audio="https://cdn.busuu.com/media/resized/audio/a1l7101661524462_1661524462.mp3"
      />

      <ExerciceWithoutVideo
        answer_1="Tu es impatiente aujourd'hui."
        answer_2="Il est impatient aujourd'hui."
        answer_3="Elle est impatiente aujourd'hui."
        answer_4="Elle es impatiente aujourd'hui."
        correctAnswer="Elle est impatiente aujourd'hui."
        nextExercise="/learning/exercices/first-lessons/2/2_4/exercice6"
      />
    </div>
  );
}
