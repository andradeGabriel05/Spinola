import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";


export default function Exercice7() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="63.63%" prevProgressExercice="54.54%"/>

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoInputExercices
        sentenceText1="Elle "
        sentenceText2="contente."
        answer_1="est"
        answer_2="es"
        correctAnswer="est"
        nextExercise={"/learning/exercices/first-lessons/2/2_3/exercice8"}
      />
    </div>
  );
}
