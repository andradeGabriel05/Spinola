import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice2() {
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="18.18%" prevProgressExercice={"9.09%"} />

      <div className="exercice_title page_exercice_text">
        <p>Tu es de quelle nationalité ? </p>
      </div>

      <VideoExercices miniature={"https://st.focusedcollection.com/8860618/i/650/focused_124364670-stock-photo-two-people-talking.jpg"} audio={"https://cdn.busuu.com/media/resized/audio/ltuesdequelnationalite_1604923381.mp3"} />

      <VideoBoolExercices 
        answer_1="true"
        answer_2="false"
        correctAnswer="true"
        question={`"Tu es de quelle nationalité ?" means: What nationality are you?`}
        nextExercise="/learning/exercices/first-lessons/3/3_2/exercice3"
      
      />
    </div>
  );
}
