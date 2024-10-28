import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";

export default function Exercice6() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="66.66%" prevProgressExercice="55.55%"/>

      <div className="exercice_title page_exercice_text">
        <p>New Word!</p>
      </div>

      <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/medium/IAV_ALX22FR02_ZADE112_116635_65880726__14571__f_normalized.mp4#t=0.1" />

      <div className="exercice_text page_exercice_text">
        <p>Très bien</p>
        <p>Very well</p>
      </div>

      <FooterExercices
        nextExercise="/learning/exercices/premiere-lessons/2/2_2/exercice7"
      />
    </div>
  );
}
