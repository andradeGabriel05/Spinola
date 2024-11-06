import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice3() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="60%" prevProgressExercice={"40%"} />

      <div className="exercice_title page_exercice_text">
        <p>Select the sentence you hear. </p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature=" "
          audio="https://cdn.busuu.com/media/resized/audio/a1l7_audio1_mcq1662459650_1662459650.mp3"
        />

        <ExerciceWithoutVideo
          answer_1="Tu es content ?"
          answer_2="Tu es contente ?"
          answer_3="Tout est content ?"
          answer_4="Tout est contente ?"
          correctAnswer="Tu es content ?"
          nextExercise="/learning/exercices/first-lessons/2/2_4/exercice4"
        />
      </div>
    </div>
  );
}
