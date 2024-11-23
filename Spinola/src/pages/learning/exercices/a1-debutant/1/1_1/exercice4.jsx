import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice4() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="50%" prevProgressExercice="37.5%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/980e8529-efa8-4959-a3e1-6af612932ee0_small.mp4" />

      <VideoInputExercices
        answer_1="m'appelle"
        answer_2="mappelle"
        sentenceText1="Je"
        sentenceText2="Sophie"
        correctAnswer="m'appelle"
        nextExercise={"/learning/exercices/first-lessons/1/1_1/exercice5"}
      />
    </div>
  );
}
