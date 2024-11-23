import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

export default function Exercice7() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="70%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/cd02cfc0-258c-43e1-a4f0-da809a82afae_small.mp4" />

      <VideoInputExercices
        sentenceText1="Je m’appelle Rachid, et "
        sentenceText2="?"
        answer_1="tu"
        answer_2="toi"
        correctAnswer="toi"
        nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice8"}
      />
    </div>
  );
}
