import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice1() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="14.28%" />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/b2e79040-b76f-461b-813a-5c2cdaaf76b7_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Ça va ?</p>
          <p>How's it going?</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/1/1_3/exercice2"}
      />
    </div>
  );
}
