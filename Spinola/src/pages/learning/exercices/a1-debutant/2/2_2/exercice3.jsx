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
        <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/medium/86606__m__1528363778_normalized.mp4#t=0.1" position="top"/>

        <div className="exercice_text page_exercice_text">
          <p>ça va, et toi ?</p>
          <p>I'm good, and you?</p>
          <p>(literal)it goes, and you ?</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_2/exercice4"}
      />
    </div>
  );
}
