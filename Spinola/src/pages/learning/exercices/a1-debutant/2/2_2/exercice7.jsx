import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import "../exercice.scss";

export default function Exercice7() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="77.77%" prevProgressExercice="66.66%"/>

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://static.memrise.com/uploads/things/video/medium/1000091193_161125_1359_29.mp4#t=0.1" />

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        title="Trés bien"
        correctAnswer="True"
        question="Très bien means very well."
        nextExercise={"/learning/exercices/first-lessons/2/2_2/exercice8"}
      />
    </div>
  );
}
