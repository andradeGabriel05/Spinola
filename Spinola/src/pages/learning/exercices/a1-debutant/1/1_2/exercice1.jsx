import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice1() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="11.11%" prevProgressExercice="0%"/>

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/186db240-bcb6-49ff-9aa6-0d1bb1a88e4e_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>S'il vous plaît</p>
          <p>Please</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/premiere-lessons/1/1_2/exercice2"}
      />
    </div>
  );
}
