import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

export default function Exercice6() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="54.54%" prevProgressExercice="45.45%"/>

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>
      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/e8c6e15b-2228-4969-b60d-c7f883069fe2_small.mp4"} />

      </div>

      <VideoInputExercices
        sentenceText1="Tu"
        sentenceText2="impatiente !"
        answer_1="est"
        answer_2="es"
        correctAnswer="es"
        nextExercise={"/learning/exercices/premiere-lessons/2/2_3/exercice7"}
      />
    </div>
  );
}
