import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice4() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="77.77%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/343b53a0-71fa-4ec3-9c4a-d6e89cf0f523_small.mp4" />

      <VideoInputExercices
        answer_1="bien"
        answer_2="rien"
        sentenceText1="De"
        correctAnswer="rien"
        nextExercise={"/learning/exercices/premiere-lessons/1/1_2/exercice8"}
      />
    </div>
  );
}
