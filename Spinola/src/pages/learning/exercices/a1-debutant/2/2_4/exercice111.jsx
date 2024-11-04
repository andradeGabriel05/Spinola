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
        <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/medium/86608__m__1528464136_normalized.mp4#t=0.1" position="top"/>

        <div className="exercice_text page_exercice_text">
          <p>Oui</p>
          <p>Yes</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/premiere-lessons/2/2_3/exercice2"}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4