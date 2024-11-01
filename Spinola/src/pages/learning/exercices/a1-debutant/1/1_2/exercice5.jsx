import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice5() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="55.55%" prevProgressExercice="44.44%" />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/0986b555-75c5-4b7a-9f69-c6a49cea1023_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>De rien</p>
          <p>You're welcome</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/premiere-lessons/1/1_2/exercice6"}
      />
    </div>
  );
}
