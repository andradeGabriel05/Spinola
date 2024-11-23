import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice8() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="80%" />

      <div className="exercice_title page_exercice_text">
        <p>New Word!</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/b207ad9e-dd24-4eda-b825-f9d021064a97_small.mp4" />

      <div className="exercice_text page_exercice_text">
        <p>Enchanté. / Enchantée.</p>
        <p>Nice to meet you.</p>
      </div>

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice9"}
      />
    </div>
  );
}
