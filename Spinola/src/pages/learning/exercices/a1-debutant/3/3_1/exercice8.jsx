import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice8() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="88.88%" prevProgressExercice={"77.77%"}/>

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices miniature={" "} audio="https://cdn.busuu.com/media/resized/audio/a1l8tf21662462405_1662462405.mp3" />

      <VideoBoolExercices
        question="Sophie doesn't know Fed and Mounia. "
        answer_1="True"
        answer_2="False"
        answer="True"
        correctAnswer="True"
        nextExercise="/learning/exercices/first-lessons/3/3_1/exercice9"
      />
    </div>
  );
}
