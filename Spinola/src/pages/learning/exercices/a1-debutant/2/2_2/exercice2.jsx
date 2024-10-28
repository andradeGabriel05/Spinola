import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice2() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="22.22%" prevProgressExercice="11.11%"/>

      <div className="exercice_title page_exercice_text">
        <p>Looking back...</p>
      </div>

      <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/IAV_ALX22FR04_FANNY_14564_d3aaf4fe.mp4#t=0.1" />

      <div className="exercice_text page_exercice_text">
        <p>Ça va</p>
        <p>how are you?; all good?</p>
        <p>(literal) it goes?</p>
      </div>

      <FooterExercices 
      nextExercise="/learning/exercices/premiere-lessons/2/2_2/exercice3"
      />
    </div>
  );
}
