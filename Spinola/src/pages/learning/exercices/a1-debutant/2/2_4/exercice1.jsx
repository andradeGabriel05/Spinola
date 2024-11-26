import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import { exerciceCounter } from "../../../../../../global";

export default function Exercice1() {
  exerciceCounter.length = 0;
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="20%" prevProgressExercice="0%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc="https://cdn.busuu.com/media-resources/video/mp4/08bad191-1113-48d2-a363-b16bd76d9090_small.mp4"
          position="top"
        />

        <VideoInputExercices 
          answer_1="suis"
          answer_2="es"
          answer_3="suit"
          answer_4="est"
          sentenceText1="Je"
          sentenceText2="contente et il "
          sentenceText3="content aussi."
          correctAnswer="suis"
          correctAnswer2="est"
          nextExercise={"/learning/exercices/first-lessons/2/2_4/exercice2"}
        
        />
      </div>
    </div>
  );
}
