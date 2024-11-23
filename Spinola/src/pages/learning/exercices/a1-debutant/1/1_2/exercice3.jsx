import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice3() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="33.33%" prevProgressExercice="22.22%"/>

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/669dd28f-1ea4-4ce6-9191-2cb49ee1496e_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Merci</p>
          <p>Thanks</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/1/1_2/exercice4"}
      />
    </div>
  );
}
