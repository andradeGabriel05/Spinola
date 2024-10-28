import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";


export default function Exercice5() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="83.35%" prevProgressExercice="66.67%"/>

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/0c6fd924-d1fc-4b3c-b44d-cca95c2217d6_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Au revoir!</p>
          <p>Goodbye!</p>
        </div>
      </div>
      <FooterExercices nextExercise={"/learning/exercices/premiere-lessons/1/1_1/exercice6"}/>
    </div>
  );
}
