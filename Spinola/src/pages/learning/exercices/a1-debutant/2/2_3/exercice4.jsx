import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";

export default function Exercice4() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="36.36%" prevProgressExercice="27.27%"/>

      <div className="exercice_title page_exercice_text">
        <p>singular forms of être</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media/resized/video/mp4/small/singulier1661806716_1661806716.mp4" />
      <div className="exercice_text page_exercice_text">
        <p>je suis - Je suis contente !</p>
        <p>tu es - Tu es fatigué ?</p>
        <p>il est / elle est - Il est impatient. </p>
      </div>

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_3/exercice5"}
      />
    </div>
  );
}
