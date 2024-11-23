import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice3() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="27.27%" prevProgressExercice={"18.18%"} />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/962dc53a-ab68-439d-9525-f4e96794e75a_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>français / française</p>
          <p>French (masculine) / French (feminine)</p>
          <p>(example)Mathilde est française => Mathilde is French. </p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice4"}
      />
    </div>
  );
}
