import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

export default function Exercice6() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="85.71%" />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices
        videoSrc="https://cdn.busuu.com/media-resources/video/mp4/f8501d4f-99ea-425d-953f-907b6579b7e2_small.mp4"
      />

      <div className="exercice_text page_exercice_text">
        <p>Bonjour, ça va ? - Bien merci, et vous ?</p>
      </div>

      <VideoInputExercices
        answer_1="ravoir"
        answer_2="revoir"
        sentenceText1="Au"
        sentenceText2=" ! — Au revoir !"
        correctAnswer="revoir"
        question={`"Et vous?" means "And you? (singular formal)".`}
        nextExercise={"/premiere-lecon"}
      />
    </div>
  );
}
