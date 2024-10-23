import HeaderExercices from "../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "./exercice.scss";

export default function Exercice4() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="66.67%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/980e8529-efa8-4959-a3e1-6af612932ee0_small.mp4" />

      <VideoInputExercices
        answer_1="m'appelle"
        answer_2="mappelle"
        sentenceText1="Je"
        sentenceText2="Sophie"
        nextExercise={"/learning/exercices/premiere-lessons/1/exercice5"}
      />
    </div>
  );
}
