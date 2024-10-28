import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";

export default function Exercice3() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="42.85%" />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Je suis content.</p>
          <p>I am happy. (masculine)</p>
        </div>
      </div>

      <FooterExercices 
        nextExercise={"/learning/exercices/premiere-lessons/2/2_3/exercice4"}
      />
    </div>
  );
}
