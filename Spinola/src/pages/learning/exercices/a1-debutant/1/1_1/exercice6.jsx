import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";

export default function Exercice6() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="75%" prevProgressExercice="62.5%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/0c6fd924-d1fc-4b3c-b44d-cca95c2217d6_small.mp4" />

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        title="Au revoir!"
        correctAnswer="True"
        question='"Au revoir" means "goodbye"'
        nextExercise={"/learning/exercices/first-lessons/1/1_1/exercice7"}
      />
    </div>
  );
}
