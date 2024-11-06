import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice6() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="60%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/d96bf4ba-1b28-47d5-8ce6-2b042b69ad0b_small.mp4" />

      <div className="exercice_text page_exercice_text">
        <p>Et toi ?</p>
        <p>And you? (singular, informal)</p>
      </div>

      <FooterExercices nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice7"} />
    </div>
  );
}
