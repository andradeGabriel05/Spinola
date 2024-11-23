import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice1() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="10%" />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/cc49ca87-c4dd-46a5-beec-f92b70041941_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Salut !</p>
          <p>Hi!</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice2"}
      />
    </div>
  );
}
