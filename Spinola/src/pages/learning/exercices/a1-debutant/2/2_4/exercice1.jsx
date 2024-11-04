import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";

export default function Exercice1() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="10%" prevProgressExercice="0%"/>

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/medium/86613__f__1528458925.mp4#t=0.1" position="top" />

        <div className="exercice_text page_exercice_text">
          <p>Comment tu t'appelle</p>
          <p>What is your name?</p>
          <p>(literal)How do you call yourself?</p>
        </div>
      </div>

      <FooterExercices 
        nextExercise={"/learning/exercices/premiere-lessons/2/2_3/exercice2"}
      />
    </div>
  );
}
