import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice4() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="40%" />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices miniature="https://www.lingoda.com/blog/wp-content/uploads/2022/09/talking-on-the-phone-e1664263017743.jpg" audio="https://cdn.busuu.com/media/resized/audio/a1l531661427563_1661427563.mp3"/>

      <div className="exercice_text page_exercice_text">
          <p>Salut Mathilde !</p>
        </div>

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        question='"Salut" means "hi".'
        correctAnswer="True"
        nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice5"}
      />
    </div>
  );
}
