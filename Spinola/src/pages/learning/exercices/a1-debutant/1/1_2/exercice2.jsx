import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";

export default function Exercice2() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="22.22%" prevProgressExercice="11.11%"/>

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/186db240-bcb6-49ff-9aa6-0d1bb1a88e4e_small.mp4" />

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        title="S'il vous plaît"
        correctAnswer="True"
        question={`"s'il vous plaît" means "please"`}
        nextExercise={"/learning/exercices/first-lessons/1/1_2/exercice3"}
      />
    </div>
  );
}
