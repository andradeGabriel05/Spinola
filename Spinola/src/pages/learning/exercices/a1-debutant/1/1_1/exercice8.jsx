import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice8() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="100%" prevProgressExercice={"87.5%"}/>

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/medium/86609__m__1528469383_normalized.mp4#t=0.1" position="top"/>

        <div className="exercice_text page_exercice_text">
          <p>Non</p>
          <p>No</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/premiere-lecon"}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4