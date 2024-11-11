import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice6() {
  return (
    <div className="container_execice">
      <HeaderExercices
        progressExercice="54.54%"
        prevProgressExercice={"45.45%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>New Word!</p>
      </div>

      <VideoExercices
        videoSrc={
          "https://cdn.busuu.com/media-resources/video/mp4/47e89f76-d20d-44d4-b70b-ded376d0d860_small.mp4"
        }
      />
      <div className="exercice_text page_exercice_text text_left">
        <p>anglais / anglaise</p>
        <p> English</p>
      </div>

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice7"}
      />
    </div>
  );
}
