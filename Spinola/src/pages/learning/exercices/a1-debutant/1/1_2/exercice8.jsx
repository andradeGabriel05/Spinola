import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice8() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="88.88%" prevProgressExercice="77.77%"/>

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/2b1dbefc-1b50-428c-a699-d26cae7061f3_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Pardon</p>
          <p>Sorry</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/1/1_2/exercice9"}
      />
    </div>
  );
}
