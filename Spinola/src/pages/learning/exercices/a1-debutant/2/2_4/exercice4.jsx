import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice4() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="28.57%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/176f33ea-7700-4139-ace4-db080b99463e_small.mp4" />

      <VideoInputExercices
        answer_1="et vous"
        answer_2="a yous"
        sentenceText1="Bien, merci!"
        correctAnswer="et vous"
        nextExercise={"/learning/exercices/premiere-lessons/1/1_4/exercice5"}
      />
    </div>
  );
}
