import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice2() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="33.34%" prevProgressExercice="16.66%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/ae3c859d-285b-49f4-9db4-868ffdcbf58d_small.mp4" />

      <VideoInputExercices
        answer_1="Bonjour"
        answer_2="Bonjore"
        correctAnswer="Bonjour"
        nextExercise={"/learning/exercices/premiere-lessons/1/1_1/exercice3"}
      />
    </div>
  );
}
