import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice5() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="71.42%" />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/webm/db930845-87b8-4e7b-afca-ef4e43964830_small.webm" />

        <div className="exercice_text page_exercice_text">
          <p>Et vous ?</p>
          <p>And you? (singular formal)</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/1/1_3/exercice6"}
      />
    </div>
  );
}
