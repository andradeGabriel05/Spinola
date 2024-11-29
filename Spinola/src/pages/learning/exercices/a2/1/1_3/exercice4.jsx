import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import LanguageFile from "../../../../../../language";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
export default function Exercice4() {
  exerciceCounter.length = 0;
  exerciceCounter.push("correct");

  console.log(exerciceCounter);

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="57.14%" />

      <div className="exercice_title page_exercice_text">
        <p>Select the sentence that is grammatically correct. </p>
      </div>

      <ExerciceWithoutVideo
        answer_1="Tu es restés tard au travail ?"
        answer_2="Tu as resté tard au travail ?"
        answer_3="Tu es resté tard au travail ? "
        correctAnswer="Tu es resté tard au travail ?"
        nextExercise={"/learning/exercices/a2/1/1_3/exercice5"}
      />
    </div>
  );
}
