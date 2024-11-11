import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice2() {
  return (
    <div className="container_execice bigger_page">
      <HeaderExercices progressExercice="28.57%" prevProgressExercice={"14.28%"} />

      <div className="exercice_title page_exercice_text">
        <p>Tu es de quelle nationalité ? </p>
      </div>

      <VideoExercices miniature={" "} audio={"https://cdn.busuu.com/media/resized/audio/a1l9ac31662474139_1662474139.mp3"} />

      <ExerciceWithoutVideo 
          answer_1="He is Mexican and she is American."
          answer_2="He is American and she is Mexican."
          answer_3="They are both Mexican."
          correctAnswer="He is American and she is Mexican."
          nextExercise="/learning/exercices/first-lessons/3/3_3/exercice3"
      />
    </div>
  );
}
