import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice1() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="16.67%" prevProgressExercice="0%"/>

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/85f20432-442d-482f-af59-7ad987f152c2_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Bonjour</p>
          <p>Hello</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/premiere-lessons/1/1_1/exercice2"}
      />
    </div>
  );
}
