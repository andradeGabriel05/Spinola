import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";

export default function Exercice9() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="100%" prevProgressExercice="88.88%" />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/2b1dbefc-1b50-428c-a699-d26cae7061f3_small.mp4" />

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        title="Pardon!"
        correctAnswer="True"
        question={`"Pardon" means "sorry".`}
        nextExercise={"/premiere-lecon"}
      />
    </div>
  );
}
